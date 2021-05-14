const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : false, defaultViewport : null,
        
    });
    const page = await browser.newPage();
    await page.goto('https://www.etoos.com/member/login.asp?returnUrl=http://247.etoos.com/lms/index.do');  
      
    await page.type('#mem_id', 'id');
    await page.type('#pwdtmp', 'pw');
    // #id, #pw 추출과 비교
    await page.click('.btn_login');
    // click iogin clas
    await page.waitForNavigation;
    // 다음 페이지가 원활하게 뜰 때까지 대기
    await page.waitForSelector('#lnbmenu > ul > li:nth-child(2) > a');
    await page.click('#lnbmenu > ul > li:nth-child(2) > a');
    // selector 를 누르기 전 찾아야하므로 waitForSelector 를 준 다음 click
    await page.waitForSelector('#m_PB200717 > a');
    await page.click('#m_PB200717 > a');
    // 위와 동일
    // loging -> main_page -> my247_page -> DailyTest -> Table text 추출 
    await page.waitForNavigation;
    

    // Table Text 추출
    const selector = '#container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(1) > td:nth-child(4)';
    await page.waitForSelector(selector);
    data = await page.$eval(selector,(element) => element.textContent);
    
    console.log(data);

})();


한지수 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(1) > td:nth-child(4)
응시일 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(1) > td:nth-child(7)

전희상 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(2) > td:nth-child(4)
응시일 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(2) > td:nth-child(7)

전희상 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(3) > td:nth-child(4)
응시일 : #container > div.contents > div.wrap_tbl_sdw.mgt_30 > table > tbody > tr:nth-child(3) > td:nth-child(7)