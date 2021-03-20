import { useState, useEffect } from "react";
import { SEC_TO_MS, TWO_MINUTE_DELAY_IN_MS } from "../constants/constants";
import ExpressAPI from "../api/ExpressAPI";

/* Store token in local storage */
const storeTokenInfo = (tokenObject) => {
  const tokenInfo = {
    ...tokenObject,
    date_created: Date.now(),
    date: new Date().toLocaleString(),
  }; // Extract token information
  localStorage.setItem("tokenInfo", JSON.stringify(tokenInfo)); // Store token information in local storage
  return tokenInfo;
};

/* Returns a Spotify access token */
export const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await ExpressAPI.getToken();
        const tokenInfo = storeTokenInfo(response.data);
        timeout = setTimeout(
          getAccessToken,
          response.data.expires_in * SEC_TO_MS
        ); // Request access token every hour
        setToken(tokenInfo.access_token);
      } catch (err) {
        console.log(err);
      }
    };

    let timeout; // Used to clear the timeout

    // Determine if user has valid token stored in local storage
    const tokenInfo = JSON.parse(localStorage.getItem("tokenInfo"));
    const currentDate = Date.now();
    const tokenIsValid =
      tokenInfo &&
      currentDate - tokenInfo.date_created <
        tokenInfo.expires_in * SEC_TO_MS - TWO_MINUTE_DELAY_IN_MS;

    if (tokenIsValid) {
      // Valid token
      const expires_in =
        tokenInfo.expires_in * SEC_TO_MS -
        (currentDate - tokenInfo.date_created);
      setToken(tokenInfo.access_token);
      timeout = setTimeout(getAccessToken, expires_in); // Get another token when the current one expires
    } else {
      // Missing or invalid, get new token
      getAccessToken();
    }

    // Clear timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [token]);

  return [token];
};
