import React from 'react';
import ImageButtons from './ImageButton';
import styled from "styled-components";
import FileInput from './FileInput';

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

const Buttons = () => {
  return (
    <Container>
      <ImageButtons text="Upload Image" />
      <Text>OR</Text>
      <ImageButtons text="Take Picture" />
    </Container>
  );
};

export default Buttons;