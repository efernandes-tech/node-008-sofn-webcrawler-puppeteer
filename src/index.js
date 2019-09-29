const puppeteer = require('puppeteer')

;(async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.reddit.com/r/hackernews/')

    await browser.close()

})()