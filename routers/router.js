const router = require('express').Router();

const controllers = require('../controllers/controllers');

router.get('/youtube', controllers.getDetails);
router.get('/twitch', controllers.getStreamer);

module.exports = router;
