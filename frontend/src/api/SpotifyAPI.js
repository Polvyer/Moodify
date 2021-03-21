import axios from "axios";
import { SPOTIFY_SEARCH_ENDPOINT } from "../constants/constants";

/* Singleton ExpressAPI object */
const SpotifyAPI = {
  search: (token, mood) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    // Query Parameters
    const q = mood.split(" ").join("%20");
    const type = "playlist";
    const limit = 10;
    const params = `q=${q}&type=${type}&limit=${limit}`;

    const url = `${SPOTIFY_SEARCH_ENDPOINT}?${params}`;

    return axios(url, config);
  },
  getTracks: (token, url) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    return axios(url, config);
  },
};

Object.freeze(SpotifyAPI);

export default SpotifyAPI;
