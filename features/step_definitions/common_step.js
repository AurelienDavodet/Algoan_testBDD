const expect = require("chai")
const puppeteer = require("puppeteer")
const {When, Then, And, Given} = require("cucumber")
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const assert = require('assert');
const { equal } = assert;



Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
})

When('Open the Algoan page', async function () {
    await this.page.goto("https://www.algoan.com/")
});



Then('The text for the first header should be "Credit decisioning as a Service"', async () =>{
  this.browser = await puppeteer.launch({headless:false})
  this.page = await this.browser.newPage();
  await this.page.goto("https://www.algoan.com/")

  await this.page.waitForSelector('.fQXZv');
const textContent = await this.page.evaluate(() => document.querySelector('.fQXZv').textContent);
console.log('Page title = ' + textContent);
  

});