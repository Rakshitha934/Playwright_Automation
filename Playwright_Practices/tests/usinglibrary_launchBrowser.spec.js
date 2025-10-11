const {chromium,devices} = require('playwright');

(async()=>{

    const browser= await chromium.launch();
    const context = await browser.newContext(devices['iphone 11']);
    const page = await context.newPage();
})