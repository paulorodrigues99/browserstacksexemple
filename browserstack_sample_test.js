var webdriver = require('selenium-webdriver');

var userName = "paulogomes4";
var accessKey = "BvzXzsfZgvfie8ghJeeQ"
var browserstackURL = 'https://' + userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {

  'os': 'Windows',
  'os_version': '10',
  'browserName': 'Chrome',
  'browser_version': '80',

  'name': "paulogomes4's First Test"

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('https://www.trivago.com.br')
  .then(async function () {
    console.log('Iniciando automação')
    await driver.findElement(webdriver.By.xpath('/html/body/div[4]/div[2]/div[4]/div[1]/form/div[1]/input'))
      .sendKeys('Natal')
      .then(function () {
        driver.findElement(webdriver.By.className("search-button__label")).click()
      })
      .then(function () {
        driver.findElement(webdriver.By.className("dealform-button__text-wrapper")).click()
      })
      .then(function () {
        driver.findElement(webdriver.By.className("roomtype-btn__wrap")).click()
      })
      .then(function () {
        driver.findElement(webdriver.By.id("mf-select-sortby")).click()
      })
      .then(function () {
        driver.findElement(webdriver.By.js('document.querySelector("#mf-select-sortby").selectedIndex = "6"'))
      })
      .then(function () {
        driver.findElement(webdriver.By.js(`document.querySelector("#\\33 166102 > article > div.pos-relative.item__wrapper > div.item__flex-column > div > div > h3 > span").getAttribute('Title')`))
      })
      .then(function () {
        var nomeSiteOferta = driver.findElement(webdriver.By.js(`document.querySelector("#\\33 166102 > article > div.pos-relative.item__wrapper > div.item__flex-column > section > div.accommodation-list__rowLast--b85ca.accommodation-list__row--25e88 > article > div > div.accommodation-list__container--b4c9d > div > header").innerText`))
        var valorSiteOferta = driver.findElement(webdriver.By.js(`document.querySelector("#\\33 166102 > article > div.pos-relative.item__wrapper > div.item__flex-column > section > div.accommodation-list__rowLast--b85ca.accommodation-list__row--25e88 > article > div > div.accommodation-list__dealInfo--18458.accommodation-list__offset--e480c > div > div > div > strong")`))
        

        console.log(`Site da oferta: ${nomeSiteOferta}`);
      })
  })
