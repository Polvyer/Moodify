import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  flex-basis: 330px;
  padding: 20px;

  @media screen and (max-width: 1029px) {
    background-color: #f6f6f9;
  }
`;

const YouTubePlayer = () => {
  const url = "https://www.youtube.com/embed/E7wJTI-1dvQ";

  return (
    <Container>
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </Container>
  );
};

export default YouTubePlayer;
