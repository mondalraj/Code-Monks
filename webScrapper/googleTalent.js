const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://careers.google.com/jobs/results/?company=Google&degree=BACHELORS&distance=50&employment_type=INTERN&jlo=en_US&q=software&src=Online%2FTOPS%2FTOPS_site');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.gc-card')).map((hack) => ({
        name: hack.querySelector('h2').innerText.trim(),
        companyName: hack.querySelector('.gc-job-tags > li > span').innerText.trim(),
        location: hack.querySelector('.gc-job-tags > .gc-job-tags__location > div > span').innerText.trim(),
        link: hack.querySelector('a').href
    })));
    
    console.log(HackList);
    
    await browser.close();
})();