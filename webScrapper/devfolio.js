const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://devfolio.co/hackathons');

    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.jcKWGN')).map((hack) => ({
        name: hack.querySelector('.kwhLPe').innerText.trim(),
        date: hack.querySelector('.esEXVk').innerText.trim(),
        organizer: "Devfolio",
        link: hack.querySelector('.hcmcER').href
    })));

    console.log(HackList);
    await browser.close();

})();