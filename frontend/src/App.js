import React, { useState } from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";
import axios from 'axios';

/* Components */
import Logo from "./components/Logo";
import Picture from "./components/Picture";
import ImageOptions from "./components/ImageOptions";
import Camera from "./components/Camera";

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
`;

const App = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [picture, setPicture] = useState({
    file: null,
    url: null,
  });
  const [token] = useToken();
  console.log("Token:", token);
  console.log("Picture:", picture);

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

  const submit = () => {
    const formData = new FormData();
    formData.append('file', picture.file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    };

    axios.post('/api/posts', formData, config)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
        }
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Logo />
      <div>
        <PictureContainer>
          {showCamera ? <Camera setShowCamera={setShowCamera} picture={picture} setPicture={setPicture} /> : <Picture picture={picture} />}
        </PictureContainer>
        <ImageOptions changePicture={changePicture} showCamera={showCamera} setShowCamera={setShowCamera} />
      </div>
    </>
  );
};

export default App;
