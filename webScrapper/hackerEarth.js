const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.hackerearth.com/challenges/hackathon/');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.upcoming')).map((hack) => ({
        name: hack.querySelector('.challenge-name').innerText.trim(),
        Date: hack.querySelector('.date').innerText.trim(),
        participants: hack.querySelector('.registrations').innerText.trim(),
        organizer: hack.querySelector('.company-details').innerText.trim(),
        link: hack.querySelector('.challenge-card-link').href
    })));
    
    console.log(HackList);
    await browser.close();
})();