const models = require('../models/models');

const getDetails = async (req, res) => {
  try {
    const details = await models.details(req.body.id);
    res.status(200);
    res.send(details);
  } catch (e) {
    console.log('there is an error', e);
    res.status(500);
  }
};

const getStreamer = async (req, res) => {
  try {
    const streamer = await models.streamer(req.body.name);
    res.status(200);
    res.send(streamer);
  } catch (e) {
    console.log('there is an error', e);
    res.status(500);
  }
};

module.exports = { getDetails, getStreamer };
