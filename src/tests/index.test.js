import path from "path";
import puppeteer from "puppeteer";

jest.setTimeout(15000);
test("React starts successfully", async () => {
    // setup
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // test
    const url = `file:${path.join(__dirname, "../../index.html")}`;
    await page.goto(url);
    await page.waitForSelector("#app>div", { timeout: 3000 });
    await page.screenshot({ path: path.join(__dirname, "home.png") });
    // cleanup
    await page.close();
    await browser.close();
});
