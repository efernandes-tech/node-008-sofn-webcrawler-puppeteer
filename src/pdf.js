const puppeteer = require('puppeteer')

; (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://pixabay.com/')
    await page.setViewport({
        width: 1000,
        height: 1000
    })

    await page.pdf({ path: 'pdf1.pdf', format: 'A4' })

    await browser.close()
})()