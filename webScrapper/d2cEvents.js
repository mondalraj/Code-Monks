const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dare2compete.com/college-festivals?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible');

    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.listing')).map((hack) => ({
        name: hack.querySelector('h2.double-wrap').innerText.trim(),
        organizer: hack.querySelector('h3').innerText.trim(),
        // link: hack.querySelector('a.listing.order-1.id-16599.closed.half_banner.ng-star-inserted').href
        link: "https://dare2compete.com/hackathons?filters=,all,open,all&types=teamsize,payment,oppstatus,eligible"
    })));
    console.log(HackList);
    await browser.close();
})();