const got = require('got');
const scraper = require('../scraper/scraper');
const puppeteer = require('puppeteer');

const details = async (videoId) => {
  const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${process.env.API_KEY}`;
  return await got(url)
    .then((data) => JSON.parse(data.body))
    .then((data) => data.items[0].snippet)
    .then((data) => {
      const { title, description, channelTitle, categoryId } = data;
      return {
        title,
        description,
        channelTitle,
        categoryId,
        game: {},
      };
    })
    .then(async (obj) => {
      if (+obj.categoryId === 20) {
        await (async () => {
          const browser = await puppeteer.launch();
          const game = await scraper(browser, videoUrl, 'youtube');
          obj.game = game.details;
          await browser.close();
        })();
        console.log('success ☘️', obj);
        return obj;
      }
    })
    .catch((e) => console.error(e.message));
};

const streamer = async (id) => {
  const url = 'https://api.twitch.tv/kraken/users?id=' + id;

  return await got(url, {
    headers: {
      'Client-ID': process.env.CLIENT_ID,
      Accept: 'application / vnd.twitchtv.v5 + json',
    },
  })
    .then((res) => JSON.parse(res.body))
    //get name here
    .then((data) => {
      console.log(data);
      return data.users[0].display_name;
    })
    //scraper here
    .then(async (name) => {
      let status;
      await (async () => {
        const browser = await puppeteer.launch();
        status = await scraper(
          browser,
          `https://www.twitch.tv/${name}`,
          'twitch'
        );
        await browser.close();
      })();
      status.name = name;
      return status;
      // return name;
    });
};
module.exports = { details, streamer };
