const got = require('got');

const details = async (videoId) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${process.env.API_KEY}`;

  return await got(url)
    .then((data) => JSON.parse(data.body))
    .then((data) => data.items[0].snippet)
    .then((data) => {
      const { title, description, channelTitle, categoryId } = data;
      return { title, description, channelTitle, categoryId };
    })
    .then((obj) => obj)
    .catch((e) => console.error(e.message));
};

const streamer = async (id) => {
  const url = 'https://api.twitch.tv/kraken/users?id=' + id;
  const headers = {
    'Client-ID': 'ab1kjt32dzahtg58lc8ask7t7kj3j2',
    Accept: 'application / vnd.twitchtv.v5 + json',
  };

  const options = {
    url,
    headers,
  };
  return await got(options)
    .then((res) => JSON.parse(res.body))
    .then((data) => data.users[0].display_name);
};
module.exports = { details, streamer };
