import React, { useState } from "react";
import TakePictureButton from "./TakePictureButton";
import styled from "styled-components";
import CustomInput from "./CustomInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  @media screen and (max-width: 450px) {
    transform: translateX(0);
  }

  * {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Text = styled.b`
  color: white;
  font-size: 1.7rem;
  text-align: center;
`;

const Buttons = ({ showCamera, setShowCamera, changePicture }) => {
  return (
    <Container>
      <CustomInput changePicture={changePicture} />
      <Text>OR</Text>
      <TakePictureButton
        callback={setShowCamera}
        text={showCamera ? "Hide Camera" : "Take Picture"}
      />
    </Container>
  );
};

export default Buttons;
