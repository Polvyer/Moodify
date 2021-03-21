import React, { useState, useEffect } from "react";
import { useToken } from "./hooks/useToken";
import ExpressAPI from "../src/api/ExpressAPI";
import SpotifyAPI from "./api/SpotifyAPI";
import GiphyAPI from "./api/GiphyAPI";

/* Components */
import Home from "./components/Home";
import CSSLoader from "./components/CSSLoader";
import Playlist from "./components/Playlist";

const App = () => {
  const [disabled, setDisabled] = useState(false);
  const [picture, setPicture] = useState({
    file: null,
    url: null,
  });
  const [token] = useToken();
  const [playlist, setPlaylist] = useState([]);
  const [mood, setMood] = useState(null);
  const [gif, setGif] = useState(null);
  const [apiKey, setAPIKey] = useState(null);

  useEffect(() => {
    async function getKey() {
      try {
        const response = await ExpressAPI.getKey();
        setAPIKey(response.data.key);
      } catch (err) {
        console.log(err);
      }
    }

    getKey();
  }, []);

  // Returns 'sad', 'happy', 'angry', 'surprise'
  const getMood = (obj) => {
    const scores = {
      VERY_LIKELY: 5,
      LIKELY: 4,
      POSSIBLE: 3,
      UNLIKELY: 2,
      VERY_UNLIKELY: 1,
      UNKNOWN: 0,
    };

    const emotions = {
      joyLikelihood: "happy",
      angerLikelihood: "angry",
      sorrowLikelihood: "sad",
      surpriseLikelihood: "surprise",
    };

    let max = -1;
    let mood = null;

    for (const key in obj) {
      let value = obj[key];
      let score = scores[value];
      let emotion = emotions[key];

      if (score > max) {
        max = score;
        mood = emotion;
      }
    }

    return mood;
  };

  // Where the magic happens...
  const submit = async (e) => {
    // Disable submit button
    setDisabled(true);

    const formData = new FormData();
    formData.append("file", picture.file);

    try {
      let response = await ExpressAPI.getMood(formData);

      if (response.data.length <= 0) {
        alert("No results from Vision API");
        setDisabled(false);
        return;
      }

      const data = response.data[0];
      const moodObj = {
        joyLikelihood: data.joyLikelihood,
        angerLikelihood: data.angerLikelihood,
        sorrowLikelihood: data.sorrowLikelihood,
        surpriseLikelihood: data.surpriseLikelihood,
      };

      const mood = getMood(moodObj);
      setMood(mood);
      response = await GiphyAPI.search(mood);
      setGif(response.data.data[0].images.original.url);
      response = await SpotifyAPI.search(token, mood + " mood");
      const url = response.data.playlists.items[0].tracks.href;
      response = await SpotifyAPI.getTracks(token, url);
      setPlaylist(response.data.items);
    } catch (err) {
      console.log(err);
    }

    // Enable submit button
    setDisabled(false);
  };

  const content = () => {
    if (playlist.length > 0) {
      return (
        <Playlist
          gif={gif}
          mood={mood}
          playlist={playlist}
          setPlaylist={setPlaylist}
          apiKey={apiKey}
        />
      );
    }

    return (
      <Home
        submit={submit}
        picture={picture}
        setPicture={setPicture}
        disabled={disabled}
      />
    );
  };

  return <>{disabled ? <CSSLoader /> : content()}</>;
};

export default App;
