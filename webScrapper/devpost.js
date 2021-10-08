const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://devpost.com/hackathons?status[]=upcoming&status[]=open');

    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.hackathon-tile')).map((hack) => ({
        name: hack.querySelector('h3').innerText.trim(),
        date: hack.querySelector('.submission-period').innerText.trim(),
        participants: hack.querySelector('.participants.mr-4.mb-3').innerText.trim(),
        organizer: hack.querySelector('.label.round.host-label').innerText.trim(),
        topics: hack.querySelector('.label.theme-label.mr-2.mb-2').innerText.trim(),
        link: hack.querySelector('.tile-anchor').href
    })));
    console.log(HackList);
    await browser.close();
})();