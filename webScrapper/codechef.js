const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.codechef.com/contests/?itm_medium=navmenu&itm_campaign=allcontests_head');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('#future-contests-data > tr')).map((hack) => ({
        name: hack.querySelector('td:nth-child(2)').innerText.trim(),
        organizer: "Codechef",
        date: hack.querySelector('td:nth-child(3)').innerText.trim(),
        duration: hack.querySelector('td:nth-child(4)').innerText.trim(),
        link: hack.querySelector('td:nth-child(2) > a').href
    })));
    console.log(HackList);
    await browser.close();
})();