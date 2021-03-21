import axios from "axios";
import { GIPHY_SEARCH_ENDPOINT } from "../constants/constants";

const GiphyAPI = {
  search: (str) => {
    // Query Parameters
    const q = str.split(" ").join("%20");

    const url = GIPHY_SEARCH_ENDPOINT + q;

    return axios.get(url);
  },
};

Object.freeze(GiphyAPI);

export default GiphyAPI;
