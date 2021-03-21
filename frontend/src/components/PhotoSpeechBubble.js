import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 25px;
  width: 300px;
  background: #e1c297;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
  color: #fff;

  :before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #e1c297;
    border-right: 12px solid transparent;
    border-top: 12px solid #e1c297;
    border-bottom: 20px solid transparent;
    left: 32px;
    bottom: -24px;
  }
`;

const B = styled.b`
  color: #191f31;
`;

const PhotoSpeechBubble = () => {
  return (
    <Bubble>
      Click on <B>"Upload Image"</B> to upload an existing image or{" "}
      <B>"Take Picture"</B> to open up the Webcam!
    </Bubble>
  );
};

export default PhotoSpeechBubble;
