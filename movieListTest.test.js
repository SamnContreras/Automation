const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Add movie to list', async () => {
    await driver.findElement(By.name('q')).sendKeys(`${inputTerm}\n`)
    let result = await driver.findElement(By.id('placeholder')).getText()
})