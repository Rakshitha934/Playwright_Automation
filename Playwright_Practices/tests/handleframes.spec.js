import { test, expect } from '@playwright/test'

test('Handle Frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frames

    const allframes = await page.frames(); // it  returns an array of all avaialbles frames in the webpage
    console.log("Number of frames is:", allframes.length);

    //Approach 1 : using name attribute or url
    // const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // frame.fill("input[name='mytext1']", "Hello");
    // await page.waitForTimeout(5000);

    //Approach2 : using framelocator

   const inputBox= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
   await inputBox.fill('Hello!!')
})