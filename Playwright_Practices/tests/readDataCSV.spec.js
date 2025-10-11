import { test } from '@playwright/test'
import fs from 'fs'
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync("test-data/testdata.csv"), {
    columns: true,
    skip_empty_lines: true,
    trim: true
})

records.forEach(record => {
    test(`Import Data from csv - ${record.id}`, async ({ page }) => {
        // console.log(records);
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder("First Name").fill("Rakshitha");
        await page.getByPlaceholder("Last Name").fill("N")
    })
})

