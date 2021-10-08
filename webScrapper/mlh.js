const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mlh.io/seasons/2022/events');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.event')).map((hack) => ({
        name: hack.querySelector('.event-name').innerText.trim(),
        organizer: hack.querySelector('.event-hybrid-notes').innerText.trim(),
        date: hack.querySelector('p').innerText.trim(),
        link: "https://mlh.io/seasons/2022/events"
    })));
    
    console.log(HackList);
    await browser.close();
    
})();