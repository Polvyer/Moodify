import axios from "axios";
import { SPOTIFY_SEARCH_ENDPOINT } from "../constants/constants";

/* Singleton ExpressAPI object */
const SpotifyAPI = {
  search: () => {
    return axios.get(SPOTIFY_SEARCH_ENDPOINT);
  },
};

Object.freeze(SpotifyAPI);

export default SpotifyAPI;
