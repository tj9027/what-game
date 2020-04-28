const fetch = require('node-fetch');

const details = async (videoId) => {
  const link = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${process.env.API_KEY}`;

  return await fetch(link, {
    method: 'get',
  })
    .then((data) => data.json())
    .then((data) => data.items[0].snippet)
    .then((data) => {
      const { title, description, channelTitle, categoryId } = data;
      return { title, description, channelTitle, categoryId };
    })
    .then((obj) => obj)
    .catch((e) => console.error(e.message));
};

const streamer = () => console.log('hello streamer');

module.exports = { details, streamer };
