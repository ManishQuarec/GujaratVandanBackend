const puppeteer = require('puppeteer');
const express = require('express');

const app = express();


module.exports = data = async () => {

    console.log("data");
    // https://gujaratvandan.com/
    // http://localhost:3000/

    const url = 'https://gujaratvandan.com/';
    const title = 'My DynamicM Title';
    const description = 'My DynamicM Description';
    const image = 'www.secret17.com';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Set the dynamic meta tags
    await page.evaluate((title, description, image) => {
        document.querySelector('meta[name="image"]').setAttribute('content', image);
        document.querySelector('meta[name="title"]').setAttribute('content', title);
        document.querySelector('meta[name="description"]').setAttribute('content', description);
        document.querySelector('meta[property="og:url"]').setAttribute('content', image);
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', description);
        document.querySelector('meta[property="og:image"]').setAttribute('content', image);
        document.querySelector('meta[property="twitter:url"]').setAttribute('content', image);
        document.querySelector('meta[property="twitter:title"]').setAttribute('content', title);
        document.querySelector('meta[property="twitter:description"]').setAttribute('content', description);
        document.querySelector('meta[property="twitter:image"]').setAttribute('content', image);
    }, title, description, image);

    // Get the modified HTML of the page
    const html = await page.content();

    await browser.close();
    //   console.log("data");
    // console.log(html);
    return html;
    // res.type('.html').send(html);
}