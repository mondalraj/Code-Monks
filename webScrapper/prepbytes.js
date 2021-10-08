const puppeteer = require('puppeteer');
const fs = require('fs');
const { time } = require('console');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mycode.prepbytes.com/contest');

    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.UpcomingContestCard.UpcomingContestCard-competitive')).map((hack) => ({
        name: hack.querySelector('p').innerText.trim(),
        organizer: "Prepbytes",
        date: hack.querySelector('p.UpcomingContestCard__middle-left-top').innerText.trim(),
        durantion: hack.querySelector('p.UpcomingContestCard__middle-right-top').innerText.trim(),
        link: hack.querySelector('a').href

    })));
    console.log(HackList);
    await browser.close();
})();