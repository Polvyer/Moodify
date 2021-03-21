import React from "react";
import styled from "styled-components";
import Extra from "./Extra";
import Ghost from "../assets/images/bad3361ef1e3546d-.gif";

const Container = styled.div`
  flex: 1;
  flex-basis: 330px;
  padding: 20px;

  @media screen and (max-width: 1029px) {
    background-color: #f6f6f9;
  }
`;

const Holder = styled.div`
  margin-top: 50px;
  margin-left: 40px;
`;

const YouTubePlayer = ({ url }) => {
  return (
    <Container>
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
      <Holder>
        <Extra />
        <img
          style={{ marginTop: "20px" }}
          src={Ghost}
          width="100"
          alt="ghost"
        />
      </Holder>
    </Container>
  );
};

export default YouTubePlayer;
