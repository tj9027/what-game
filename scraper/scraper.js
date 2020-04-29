const cheerio = require('cheerio');

const videos = new Set();

const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, (seconds || 1) * 1000));

async function scraper(browser, url) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url);

  try {
    await page.waitForSelector('body', { timeout: 5000 });
  } catch (e) {
    return results;
  }

  const results = {};

  await page.waitForSelector('div#contents', {
    timeout: 10000,
  });
  let html = await page.content();
  results['__frontPage__'] = parse(html);

  return results;
}

function parse(html) {
  const $ = cheerio.load(html);
  const gameDiv = $('a.yt-simple-endpoint', 'div#contents');
  return {
    gameTitle: $('div#title', 'div#text-container').html(),
    gameLink: $('a', 'div#contents').attr('href'),
  };
}
module.exports = scraper;
