const puppeteer = require('puppeteer')

;(async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://news.google.com/', {
        waitUntil: 'domcontentloaded'
    })

    await page.type('input[type="text"].Ax4B8.ZAGvjd', 'cafe')

    const btnSearchSelector = 'button.gb_pf'
    await page.waitForSelector(btnSearchSelector)
    await page.click(btnSearchSelector)

    console.log('clicked')

    await browser.close()

})()