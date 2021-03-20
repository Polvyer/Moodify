import React from "react";
import styled from "styled-components";
import { useToken } from "./hooks/useToken";

/* Components */
import Logo from './components/Logo';
import Picture from './components/Picture';
import ImageOptions from './components/ImageOptions';

import FileInput from "./components/FileInput";
import YouTubePlayer from './components/YouTubePlayer';

const App = () => {
  const [token] = useToken();
  console.log("Token:", token);

  return (
    <>
      <Logo />
      <div>
        <Picture />
        <ImageOptions />
      </div>
    </>
  );
};

export default App;
