import {test} from "@playwright/test";

test("simple web table", async({page})=>{

  await page.goto("https://letcode.in/table");
  const table =page.locator("#simpletable");
  const headers = table.locator("thead");
  console.log(await headers.allTextContents());

  const rows = table.locator("tbody tr");
  console.log("Rows count:"+ await rows.count());
  const cols = rows.first().locator("td")
  console.log("Cols count: "+ await cols.count());  

  const nameMatch = rows.filter({
     has: page.locator("td"),
     hasText: "Raj"
  });
   await nameMatch.locator("input").check();

})