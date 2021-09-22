import { test } from "@jest/globals"
import { describe } from "yargs"

const { Builder, Capabilities, By} = require ("selenium-webdriver")

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

describe('movie list functionality', ()=>{

    test('add a movie to the list', async () => {
        let movieInput = await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]'))
        
        await movieInput.sendKeys('Legally Blonde\n')
        await driver.sleep(5000)
        
    });
    
    test('cross movie off', async () => {
        
        let crossOff = await driver.findElement(By.xpath('//li/span'))

        crossOff.click()
        
        await driver.sleep(4000)
    });

});