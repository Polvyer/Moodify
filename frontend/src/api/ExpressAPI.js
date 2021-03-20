import axios from 'axios';
import { YOUTUBE_ENDPOINT, VISION_ENDPOINT, SPOTIFY_ENDPOINT } from '../constants/constants';

/* Singleton ExpressAPI object */
const ExpressAPI = {
  getToken: () => {
    return axios.get(SPOTIFY_ENDPOINT);
  },
  getKey: () => {
    return axios.get(YOUTUBE_ENDPOINT);
  },
  getMood: () => {
    return axios.post(VISION_ENDPOINT)
  }
};

Object.freeze(ExpressAPI);

export default ExpressAPI;