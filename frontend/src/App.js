import React, { useState } from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";

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

  // Handles image upload
  const changePicture = (e) => {
    if (e.target.files.length > 0) { // Prevents a weird bug that happens when a user uploads, but then cancels

      // Only accept image file types (jpg, jpeg, png)
      if ((e.target.files[0].type !== 'image/jpeg') && (e.target.files[0].type !== 'image/png')) {
        console.log('Only files with the following extension are allowed: png jpg jpeg');
        return;
      }

      if (picture.url) { // imageFile !== null (avoid memory issues)
        URL.revokeObjectURL(picture.url);
      }

      setPicture({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <>
      <Logo />
      <div>
        <PictureContainer>
          {showCamera ? <Camera setPicture={setPicture} /> : <Picture picture={picture} />}
        </PictureContainer>
        <ImageOptions changePicture={changePicture} showCamera={showCamera} setShowCamera={setShowCamera} />
      </div>
    </>
  );
};

export default App;
