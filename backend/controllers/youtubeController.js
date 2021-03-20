const config = require('../utils/config');

exports.getKey = (req, res, next) => {
  return res.json({ key: config.YOUTUBE_API_KEY });
};