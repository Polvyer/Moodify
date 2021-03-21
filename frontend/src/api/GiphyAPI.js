import axios from "axios";
import {GIPHY_SEARCH_ENDPOINT} from '../constants/constants';

const GIPHYAPI =
{
    search: (title) =>{
        const config = {
            method: 'GET'
        };
            // Query Parameters
            const q = title.split(' ').join('%20');

            const url = GIPHY_SEARCH_ENDPOINT + q;
            

            return axios(url, config);
    },
    
};

Object.freeze(GiphyAPI);

export default GiphyAPI;