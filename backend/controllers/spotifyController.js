const config = require('../utils/config');
const request = require('request');

exports.getToken = (req, res, next) => {

  // The original utf8 string 
  const auth_header = `${config.SPOTIFY_CLIENT_ID}:${config.SPOTIFY_CLIENT_SECRET}`;

  // Create buffer object, specifying utf8 as encoding 
  const bufferObj = Buffer.from(auth_header, 'utf-8');

  // Encode the Buffer as a base64 string 
  const base64String = bufferObj.toString("base64");

  const authOptions = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${base64String}`,
    },
    url: 'https://accounts.spotify.com/api/token',
    json: true,
    form: {
      grant_type: 'client_credentials',
    }
  };

  request.post(authOptions, function(error, response, body) {
    if (error || response.statusCode !== 200) { return next(error); }

    return res.json(body);
  });
};