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
  console.log("Token:", token);

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
      const response = await ExpressAPI.getMood(formData);
      console.log('Response:', response.data);
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
    </>
  );
};

export default App;
