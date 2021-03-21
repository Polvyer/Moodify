import React, { useState } from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";
import ExpressAPI from '../src/api/ExpressAPI';

/* Components */
import Logo from "./components/Logo";
import Picture from "./components/Picture";
import ImageOptions from "./components/ImageOptions";
import Camera from "./components/Camera";
import SubmitButton from './components/SubmitButton';
import SpotifyAPI from "./api/SpotifyAPI";
import Playlist from './components/Playlist';

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
`;

const App = () => {
  const [ disabled, setDisabled ] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [picture, setPicture] = useState({
    file: null,
    url: null,
  });
  const [token] = useToken();
  const [playlist, setPlaylist] = useState([]);
  const [mood, setMood] = useState(null);

  console.log('Playlist:', playlist);
  console.log('Mood:', mood);

  // Returns 'sad', 'happy', 'angry', 'surprise'
  const getMood = (obj) => {

    const scores = {
      VERY_LIKELY: 5,
      LIKELY: 4,
      POSSIBLE: 3,
      UNLIKELY: 2,
      VERY_UNLIKELY: 1,
      UNKNOWN: 0
    };

    const emotions = {
      joyLikelihood: 'happy',
      angerLikelihood: 'angry',
      sorrowLikelihood: 'sad',
      surpriseLikelihood: 'surprise'
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

  const changePicture = (e) => {
    if (e.target.files.length > 0) { // Prevents a weird bug that happens when a user uploads, but then cancels

      // Only accept image file types (jpg, jpeg, png)
      if ((e.target.files[0].type !== 'image/jpeg') && (e.target.files[0].type !== 'image/png')) {
        console.log('Only files with the following extension are allowed: png jpg jpeg');
        return;
      }

      // Remove current picture (if any)
      if (picture.url) { // imageFile !== null (avoid memory issues)
        URL.revokeObjectURL(picture.url);
      }

      // Set picture
      setPicture({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });

      // Hide camera
      setShowCamera(false);
    }
  };

  // Where the magic happens...
  const submit = async (e) => {

    // Disable submit button
    setDisabled(true);

    const formData = new FormData();
    formData.append('file', picture.file);

    try {
      let response = await ExpressAPI.getMood(formData);

      if (response.data.length <= 0) {
        alert('No results from Vision API');
        setDisabled(false);
        return;
      }

      const data = response.data[0];
      const moodObj = { joyLikelihood: data.joyLikelihood, 
        angerLikelihood: data.angerLikelihood,
        sorrowLikelihood: data.sorrowLikelihood,
        surpriseLikelihood: data.surpriseLikelihood };

      const mood = getMood(moodObj) + " mood";
      setMood(mood);
      response = await SpotifyAPI.search(token, mood);
      const url = response.data.playlists.items[0].tracks.href;
      response = await SpotifyAPI.getTracks(token, url);
      setPlaylist(response.data.items);
    } catch (err) {
      console.log(err);
    }

    // Enable submit button
    setDisabled(false);
  };

  return (
    <>
      <Logo />
      <div>
        <PictureContainer>
          {showCamera ? <Camera setShowCamera={setShowCamera} picture={picture} setPicture={setPicture} /> : <Picture picture={picture} />}
        </PictureContainer>
        <ImageOptions changePicture={changePicture} showCamera={showCamera} setShowCamera={setShowCamera} />
        <SubmitButton disabled={disabled} picture={picture} showCamera={showCamera} callback={submit} />
      </div>
      <Playlist playlist={playlist} setPlaylist={setPlaylist} />
    </>
  );
};

export default App;
