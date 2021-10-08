const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dare2compete.com/hackathons?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.listing')).map((hack) => ({
        name: hack.querySelector('h2.double-wrap').innerText.trim(), 
        date: hack.querySelector('strong').innerText.trim(),
        organizer: hack.querySelector('h3').innerText.trim(),
        link: "https://dare2compete.com/hackathons?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible"
    })));
    console.log(HackList);
    await browser.close();
})();