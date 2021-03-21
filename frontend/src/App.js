import React, { useState } from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";

/* Components */
import Logo from './components/Logo';
import Picture from './components/Picture';
import ImageOptions from './components/ImageOptions';
import Camera from './components/Camera';

import FileInput from "./components/FileInput";
import YouTubePlayer from './components/YouTubePlayer';

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
  border: 1px solid black;

  /*
  transform: translateX(-1.6em);

  @media screen and (max-width: 450px) {
    transform: translateX(0);
  }
  */
`;

const App = () => {
  const [ showCamera, setShowCamera ] = useState(false);
  const [token] = useToken();
  console.log("Token:", token);

  return (
    <>
      <Logo />
      <div>
        <PictureContainer>
          {showCamera ? <Camera /> : <Picture />}
        </PictureContainer>
        <ImageOptions showCamera={showCamera} setShowCamera={setShowCamera} />
      </div>
    </>
  );
};

export default App;
