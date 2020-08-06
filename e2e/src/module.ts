import { createDriver } from './driver';
import { WebDriver, By } from 'selenium-webdriver';


async function findAppRoot (driver:WebDriver){
  const rootNodeElement = await driver.findElement({id: 'webdriver-app'})
  console.log('rootNodeElement', rootNodeElement)
}

async function clickAppButton (driver:WebDriver){
  const appButton = await driver.findElement(By.css(`["data-e2e-ref"="app-button"]`))
  console.log('Click app button')
  await appButton.click()
}

async function main () {
  const driver = await createDriver('safari')
  await findAppRoot(driver)
  await clickAppButton(driver)
  await driver.close()
}


main().catch(err => {
  console.error(err);
})