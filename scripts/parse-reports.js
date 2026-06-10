const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const reportsDir = path.join(__dirname, '..', '보고서');
const outputPath = path.join(__dirname, '..', 'reports-data.js');

function parseReportFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  
  // Robust sheet matching
  let campaignSheetName = workbook.SheetNames.find(name => name.includes('보고서') || name.includes('레뷰'));
  let dailySheetName = workbook.SheetNames.find(name => name.includes('조회수'));
  let contentsSheetName = workbook.SheetNames.find(name => (name.includes('콘텐츠') && !name.includes('조회수')) || name.includes('목록'));
  
  if (!campaignSheetName || !dailySheetName || !contentsSheetName) {
    throw new Error(`필수 시트를 찾을 수 없습니다. (발견된 시트: ${workbook.SheetNames.join(', ')})`);
  }
  
  // 1. Parse Campaign Info
  const campaignData = XLSX.utils.sheet_to_json(workbook.Sheets[campaignSheetName], { header: 1 });
  let totalInfluencers = 0;
  let totalContents = 0;
  let totalViews = 0;
  
  campaignData.forEach(row => {
    if (!Array.isArray(row)) return;
    const label = String(row[1] || '').trim();
    const val = row[2];
    
    if (label.includes('인플루언서 수')) {
      totalInfluencers = parseInt(val, 10) || 0;
    } else if (label.includes('등록 콘텐츠 수')) {
      totalContents = parseInt(val, 10) || 0;
    } else if (label.includes('총 조회수')) {
      totalViews = parseInt(String(val).replace(/[^0-9]/g, ''), 10) || 0;
    }
  });

  // 2. Parse Daily Views
  const dailyDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[dailySheetName], { header: 1 });
  const dailyData = [];
  let sumPc = 0;
  let sumMobile = 0;
  
  // Find header row and start parsing from next row
  let dataStarted = false;
  dailyDataRaw.forEach(row => {
    if (!Array.isArray(row)) return;
    const dateStr = String(row[1] || '').trim();
    
    // Check for header row
    if (dateStr.includes('날짜')) {
      dataStarted = true;
      return;
    }
    
    if (dataStarted && dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const day = String(row[3] || '').trim();
      const pc = parseInt(row[4], 10) || 0;
      const mobile = parseInt(row[5], 10) || 0;
      const total = parseInt(row[6], 10) || (pc + mobile);
      
      sumPc += pc;
      sumMobile += mobile;
      
      dailyData.push({ date: dateStr, day, pc, mobile, total });
    }
  });
  
  // Sort chronologically (earliest to latest)
  dailyData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // 3. Parse Content List
  const contentsDataRaw = XLSX.utils.sheet_to_json(workbook.Sheets[contentsSheetName], { header: 1 });
  const contents = [];
  
  // Contents sheet has alternating rows:
  // Row 2k: Title, Blogger, Date, Likes, Comments
  // Row 2k+1: URL
  for (let i = 2; i < contentsDataRaw.length; i += 2) {
    const row = contentsDataRaw[i];
    const nextRow = contentsDataRaw[i + 1];
    if (!row || !Array.isArray(row)) continue;
    
    const title = String(row[1] || '').trim();
    const blogger = String(row[2] || '').trim();
    const date = String(row[3] || '').trim();
    const likes = parseInt(row[4], 10) || 0;
    const comments = parseInt(row[5], 10) || 0;
    
    if (!title || title.includes('총 합계') || title.includes('콘텐츠 명')) {
      continue;
    }
    
    let url = '';
    if (nextRow && Array.isArray(nextRow)) {
      url = String(nextRow[1] || '').trim();
    }
    
    contents.push({ title, blogger, date, likes, comments, url });
  }

  // 4. Parse Keywords
  const keywords = [];
  let keywordStarted = false;
  let valueColIndex = -1;
  let keywordColIndex = -1;
  let isPercentage = false;

  campaignData.forEach(row => {
    if (!Array.isArray(row)) return;
    
    // Stop keyword parsing if applicant stats or general info starts
    if (row.some(cell => String(cell || '').includes('신청자 통계') || String(cell || '').includes('성별') || String(cell || '').includes('구분'))) {
      keywordStarted = false;
    }

    if (row.some(cell => String(cell || '').includes('유입 키워드') || String(cell || '').includes('키워드 성과'))) {
      keywordStarted = true;
      return;
    }
    
    if (keywordStarted) {
      if (keywordColIndex === -1) {
        row.forEach((cell, idx) => {
          const cellStr = String(cell || '').trim();
          if (cellStr.includes('키워드')) {
            keywordColIndex = idx;
          } else if (cellStr.includes('비율') || cellStr.includes('노출') || cellStr.includes('건수') || cellStr.includes('건')) {
            valueColIndex = idx;
            if (cellStr.includes('비율')) {
              isPercentage = true;
            }
          }
        });
        return;
      }
      
      const rank = parseInt(row[1], 10);
      const keyword = row[keywordColIndex];
      const val = row[valueColIndex];
      
      if (keyword && val !== undefined && val !== null && String(val).trim() !== '') {
        let formattedValue = '';
        if (isPercentage && typeof val === 'number') {
          formattedValue = `${Math.round(val * 100)}%`;
        } else if (typeof val === 'number') {
          if (val < 1 && val > 0) {
            formattedValue = `${Math.round(val * 100)}%`;
          } else {
            formattedValue = `${val}건`;
          }
        } else {
          formattedValue = String(val).trim();
          if (formattedValue && !formattedValue.endsWith('%') && !formattedValue.endsWith('건') && !isNaN(formattedValue)) {
            formattedValue = `${formattedValue}건`;
          }
        }
        
        keywords.push({
          rank: keywords.length + 1,
          keyword: String(keyword).trim(),
          value: formattedValue
        });
      }
    }
  });

  // Calculate percentages and averages
  const actualTotalViews = sumPc + sumMobile;
  const mobileRatio = actualTotalViews > 0 ? Math.round((sumMobile / actualTotalViews) * 100) : 0;
  const pcRatio = actualTotalViews > 0 ? Math.round((sumPc / actualTotalViews) * 100) : 0;
  
  const contentCount = totalContents || contents.length || 1;
  const averageViews = Math.round(actualTotalViews / contentCount);
  const averageMobileViews = Math.round(sumMobile / contentCount);
  const averagePcViews = Math.round(sumPc / contentCount);

  return {
    totalInfluencers,
    totalContents: contents.length,
    totalViews: actualTotalViews || totalViews,
    averageViews,
    mobileViews: sumMobile,
    pcViews: sumPc,
    mobileRatio,
    pcRatio,
    averageMobileViews,
    averagePcViews,
    dailyData,
    contents,
    keywords
  };
}

function run() {
  if (!fs.existsSync(reportsDir)) {
    console.error(`보고서 폴더가 존재하지 않습니다: ${reportsDir}`);
    return;
  }

  const files = fs.readdirSync(reportsDir);
  const reportsData = {};

  files.forEach(file => {
    if (file.endsWith('.xlsx') && !file.startsWith('~$')) {
      const branchName = path.basename(file, '.xlsx').trim();
      const filePath = path.join(reportsDir, file);
      
      try {
        console.log(`Parsing report for branch: ${branchName}...`);
        reportsData[branchName] = parseReportFile(filePath);
        console.log(`Successfully parsed ${branchName}! Contents: ${reportsData[branchName].contents.length}개`);
      } catch (error) {
        console.error(`Error parsing ${file}:`, error.message);
      }
    }
  });

  const outputContent = `// Automatically generated by parse-reports.js\nwindow.reportsData = ${JSON.stringify(reportsData, null, 2)};\n`;
  fs.writeFileSync(outputPath, outputContent, 'utf-8');
  console.log(`Successfully wrote reports data to ${outputPath}`);
}

run();
