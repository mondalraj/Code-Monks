const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://gdg.community.dev/events/#/list');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.eventRectangle')).map((hack) => ({
        name: hack.querySelector('h4').innerText.trim(),
        date: hack.querySelector('.EventRectangle-styles-dateText-JjW6b').innerText.trim(),
        link: hack.querySelector('.picture').href
    })));
    
    console.log(HackList);
  
    
    await browser.close();
})();