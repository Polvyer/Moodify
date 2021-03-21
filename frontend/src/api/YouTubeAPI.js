import axios from "axios";
import { YOUTUBE_SEARCH_ENDPOINT } from "../constants/constants";

/* Singleton ExpressAPI object */
const YouTubeAPI = {
  search: (apiKey, str) => {
    // Query Parameters
    const q = str.split(" ").join("+");
    //const q = str.split(" ").join("%20");
    const params = `q=${q}&type=video&maxResults=10&key=${apiKey}`;

    const url = YOUTUBE_SEARCH_ENDPOINT + "&" + params;

    return axios.get(url);
  },
};

Object.freeze(YouTubeAPI);

export default YouTubeAPI;
