/* Miscellaneous */
const SEC_TO_MS = 1000;
const TWO_MINUTE_DELAY_IN_MS = 120000;

/* Express API Endpoints */
const EXPRESS_BASE_URL = process.env.REACT_APP_EXPRESS_BASE_URL;
const YOUTUBE_ENDPOINT = EXPRESS_BASE_URL + "/youtube";
const SPOTIFY_ENDPOINT = EXPRESS_BASE_URL + "/spotify";
const VISION_ENDPOINT = EXPRESS_BASE_URL + "/vision";

/* Spotify API Endpoints */
const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

/*GIPHY API KEY*/
const APIKEY = "La98BpaXzKmJ61D8xAsleB5HU1IgTrX0"; 
const GIPHY_SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;

/*
const SPOTIFY_GET_FEATURED_PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/browse/featured-playlists";
const SPOTIFY_SEVERAL_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/tracks';
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_GET_ARTIST_ENDPOINT = "https://api.spotify.com/v1/artists";
const SPOTIFY_GET_RECOMMENDATIONS_ENDPOINT = "https://api.spotify.com/v1/recommendations";
const SPOTIFY_GET_TRACK_AUDIO_FEATURES = "https://api.spotify.com/v1/audio-features";
const SPOTIFY_GET_USER_PROFILE = "https://api.spotify.com/v1/me";
*/

export {
  SEC_TO_MS,
  TWO_MINUTE_DELAY_IN_MS,
  YOUTUBE_ENDPOINT,
  SPOTIFY_ENDPOINT,
  VISION_ENDPOINT,
  SPOTIFY_SEARCH_ENDPOINT,
  GIPHY_SEARCH_ENDPOINT
};
