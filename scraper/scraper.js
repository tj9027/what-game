const cheerio = require('cheerio');

async function scraper(browser, url, type) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url);

  try {
    await page.waitForSelector('body', { timeout: 5000 });
  } catch (e) {
    return results;
  }

  const results = {};
  if (type === 'youtube') {
    await page.waitForSelector('div#contents', {
      timeout: 10000,
    });
  } else if (type === 'twitch') {
    await page.waitForSelector('div.channel-header', {
      timeout: 10000,
    });
  }
  let html = await page.content();
  results.details = parse(html, type);

  return results;
}

function parse(html, type) {
  const $ = cheerio.load(html);
  if (type === 'youtube') {
    return {
      gameTitle: $('div#title', 'div#text-container').html(),
      gameLink: 'https://www.youtube.com' + $('a', 'div#contents').attr('href'),
    };
  } else if (type === 'twitch') {
    return {
      status:
        $(
          '.tw-channel-status-text-indicator',
          // '.channel-header-user-tab__user-content',
          'div.channel-header'
        ).text() === 'Live'
          ? 'online'
          : 'offline',
      game: $(
        'img',
        // 'a.tw-interactive',
        '.channel-info-bar__info-container'
      ).attr('alt'),
    };
  }
}
module.exports = scraper;
