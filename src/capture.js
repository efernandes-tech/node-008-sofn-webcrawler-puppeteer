const puppeteer = require('puppeteer')

;(async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://news.google.com/')

    await page.type('input[type="text"].Ax4B8.ZAGvjd', 'cafe')

    const btnSearchSelector = 'button.gb_pf'
    await page.waitForSelector(btnSearchSelector)
    await page.click(btnSearchSelector)

    console.log('clicked')

    const listOfTitleSelector = 'article h3 a'
    await page.waitForSelector(listOfTitleSelector)

    const titles = await page.evaluate((listOfTitleSelector) => {
        const anchors = Array.from(document.querySelectorAll(listOfTitleSelector))

        console.log(anchors)

        return anchors.map(anchor => {
            return anchor.textContent
        })
    }, listOfTitleSelector)

    console.log(titles)

    await browser.close()

})()