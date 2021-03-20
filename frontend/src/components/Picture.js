import React from 'react';
import styled from "styled-components";
import Placeholder from '../assets/images/imagePlace.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-1.6em);
  width: 100%;

  @media screen and (max-width: 450px) {
    transform: translateX(0);
  }
`;

const Image = styled.img`
  width: 275px;
  height: 275px;
`;

const Picture = () => {
  return (
    <Container>
      <Image src={Placeholder} alt="Placeholder image"></Image>
    </Container>
  );
};

export default Picture;