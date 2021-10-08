const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/jobs/search?keywords=coding%20&location=United%20States&geoId=103644278&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.job-search-card')).map((hack) => ({
        name: hack.querySelector('h3').innerText.trim(),
        company_name: hack.querySelector('h4.base-search-card__subtitle').innerText.trim(),
        location: hack.querySelector('.job-search-card__location').innerText.trim(),
        link: hack.querySelector('a').href
    })));
    
    console.log(HackList);
    
    await browser.close();
    
})();