import path from "path";
import puppeteer from "puppeteer";

test("React starts successfully", async () => {
    // setup
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // test
    const url = `file:${path.join(__dirname, "../../index.html")}`;
    await page.goto(url);
    await page.waitFor("#app>div");
    await page.screenshot({ path: path.join(__dirname, "home.png") });
    // cleanup
    await page.close();
    await browser.close();
});
