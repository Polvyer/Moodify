import axios from "axios";
import {
  YOUTUBE_ENDPOINT,
  VISION_ENDPOINT,
  SPOTIFY_ENDPOINT,
} from "../constants/constants";

/* Singleton ExpressAPI object */
const ExpressAPI = {
  getToken: () => {
    return axios.get(SPOTIFY_ENDPOINT);
  },
  getKey: () => {
    return axios.get(YOUTUBE_ENDPOINT);
  },
  getMood: (formData) => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    };

    return axios.post(VISION_ENDPOINT, formData, config);
  },
};

Object.freeze(ExpressAPI);

export default ExpressAPI;
