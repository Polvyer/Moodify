import React, { useState } from "react";
import styled from "styled-components";

/* Components */
import Logo from "./Logo";
import Picture from "./Picture";
import ImageOptions from "./ImageOptions";
import Camera from "./Camera";
import SubmitButton from "./SubmitButton";
import PhotoSpeechBubble from "./PhotoSpeechBubble";
import SpeechBubble from "./SpeechBubble";
import Ghost from "../assets/images/bad3361ef1e3546d-.gif";

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
`;

const Intro = styled.div`
  position: absolute;
  top: 5%;
  right: 4em;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Introductions = styled.div`
  position: absolute;
  top: 20%;
  left: 4em;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Home = ({ submit, disabled, picture, setPicture }) => {
  const [showCamera, setShowCamera] = useState(false);

  const changePicture = (e) => {
    if (e.target.files.length > 0) {
      // Prevents a weird bug that happens when a user uploads, but then cancels

      // Only accept image file types (jpg, jpeg, png)
      if (
        e.target.files[0].type !== "image/jpeg" &&
        e.target.files[0].type !== "image/png"
      ) {
        console.log(
          "Only files with the following extension are allowed: png jpg jpeg"
        );
        return;
      }

      // Remove current picture (if any)
      if (picture.url) {
        // imageFile !== null (avoid memory issues)
        URL.revokeObjectURL(picture.url);
      }

      // Set picture
      setPicture({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });

      // Hide camera
      setShowCamera(false);
    }
  };

  return (
    <>
      <Logo />
      <Intro>
        <SpeechBubble />
      </Intro>
      <Introductions>
        <PhotoSpeechBubble />
        <img
          style={{ marginTop: "20px" }}
          src={Ghost}
          width="100"
          alt="ghost"
        />
      </Introductions>
      <div>
        <PictureContainer>
          {showCamera ? (
            <Camera
              setShowCamera={setShowCamera}
              picture={picture}
              setPicture={setPicture}
            />
          ) : (
            <Picture picture={picture} />
          )}
        </PictureContainer>
        <ImageOptions
          changePicture={changePicture}
          showCamera={showCamera}
          setShowCamera={setShowCamera}
        />
        <SubmitButton
          disabled={disabled}
          picture={picture}
          showCamera={showCamera}
          callback={submit}
        />
      </div>
    </>
  );
};

export default Home;
