import * as webdriver from 'selenium-webdriver'
import * as safari from 'selenium-webdriver/safari'

const factories = {
  safari: (builder:webdriver.Builder) => builder.forBrowser('safari'),
  firefox: (builder:webdriver.Builder) => builder.forBrowser('firefox'),
}

export async function createDriver(driverName:keyof typeof factories){
  const builder = factories[driverName](new webdriver.Builder())
  const driver = await builder.build()
  return driver
}