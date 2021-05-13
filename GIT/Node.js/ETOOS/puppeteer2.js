const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : false, defaultViewport : null
    });
    const page = await browser.newPage();
  
    await page.goto('https://www.etoos.com/member/login.asp?returnUrl=http://247.etoos.com/lms/index.do');  
      
    await page.type('#mem_id', 'id');
    await page.type('#pwdtmp', 'pw');
    await page.click('.btn_login');
    await page.waitForNavigation;
    await page.goto('https://247.etoos.com/lms/exam/dailyTestMgr.do');
    // 현재 2가지 오류 발생
    // 1. 로그인이 필요한 사이트 입니다 
    // 2. (node:86885) UnhandledPromiseRejectionWarning: Error: net::ERR_ABORTED at https://247.etoos.com/lms/exam/dailyTestMgr.do 발생
})();
