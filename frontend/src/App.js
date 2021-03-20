import React from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";

/* Components */
import Logo from './components/Logo';
import Picture from './components/Picture';

import Home from "./components/Home";
import ImageButtons from "./components/ImageButtons";
import FileInput from "./components/FileInput";
import YouTubePlayer from './components/YouTubePlayer';

const Text1 = styled.div`
  color: white;
  text-align: center;
`;

const App = () => {
  const [token] = useToken();
  console.log("Token:", token);

  return (
    <>
      <Logo />
      <div>
        <Picture />
        <div>
          <ImageButtons text="Upload Image" />
          <Text1>Or</Text1>
          <ImageButtons text="Upload Image" />
        </div>

        <div>
          <input type="file" accept="image/png, image/jpeg" />
        </div>
      </div>
    </>
  );
};

export default App;
