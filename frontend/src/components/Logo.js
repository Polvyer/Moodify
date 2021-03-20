import React from 'react';
import Spotify from '../assets/images/Spotify-Icon-Black-Logo.svg';
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #191f31;
  text-align: center;
`;

const ImageContainer = styled.div`
  transform: translateX(-1em);
  position: relative;

  ::after {
    content: "";
    display: inline-block;
    font-size: 1rem;
    transform: translate(-50%, -50%);
    top: 49%;
    left: 50%;
    width: 2.8em;
    height: 2.8em;
    background-color: black;
    position: absolute;
    border-radius: 50%;
    z-index: -1;
  }

  @media screen and (max-width: 450px) {
    transform: translateX(0);
  }
`;

const Image = styled.img`
  width: 8em;
  filter: invert(99%) sepia(7%) saturate(31%) hue-rotate(333deg) brightness(106%) contrast(100%);
`;

const Logo = () => {
  return (
    <Container>
      <Title>Moodify</Title>
      <ImageContainer>
        <Image src={Spotify} />
      </ImageContainer>
    </Container>
  );
};

export default Logo;