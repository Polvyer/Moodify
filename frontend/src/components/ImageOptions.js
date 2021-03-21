import React from 'react';
import TakePictureButton from './TakePictureButton';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  transform: translateX(-1.6em);

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

const Buttons = ({ showCamera, setShowCamera }) => {
  return (
    <Container>
      <TakePictureButton text="Upload Image" />
      <Text>OR</Text>
      <TakePictureButton callback={setShowCamera} text={showCamera ? "Hide Camera" : "Take Picture"} />
    </Container>
  );
};

export default Buttons;