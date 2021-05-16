const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : false,
        defaultViewport :  null }
        
    );
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height : 800});
    await page.goto('https://www.etoos.com/member/login.asp?returnUrl=http://247.etoos.com/lms/index.do');  
    
    await page.type('#mem_id', '개인ID');
    await page.type('#pwdtmp', '개인PW');
    // #id, #pw 추출과 비교
    await page.click('.btn_login');
    // click iogin clas
    await page.waitForNavigation;
    // 다음 페이지가 원활하게 뜰 때까지 대기
    await page.waitForSelector('#lnbmenu > ul > li:nth-child(2) > a');
    await page.click('#lnbmenu > ul > li:nth-child(2) > a',{delay: 100});
    // selector 를 누르기 전 찾아야하므로 waitForSelector 를 준 다음 click
    await page.waitForSelector('#m_PB200717 > a');
    await page.click('#m_PB200717 > a',{delay: 100});
    // 위와 동일
    await page.waitForNavigation;
    
    // 달력 버튼 클릭 후 월별 1일로 이동(1)
    await page.waitForSelector('#records_form > div > img:nth-child(3)');
    await page.click('#records_form > div > img:nth-child(3)', {dealy : 100});
    await page.waitForSelector('#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(7) > a');
    await page.click('#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(7) > a', {dealy : 100});
    await page.waitForSelector('#btn_search');
    await page.click('#btn_search', {dealy : 100});

    // Table 추출(1)
    await page.waitForSelector('#container > div.contents > div.wrap_tbl_sdw.mgt_30');

    const data = await page.evaluate(()=> {
        const tds = Array.from(document.querySelectorAll('#container > div.contents > div.wrap_tbl_sdw.mgt_30'))
        return tds.map(td => td.innerText)
    });
    console.log(data);
    const datalist = [data];
    console.log(datalist);

})();
