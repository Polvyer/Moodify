import React from "react";
import styled from "styled-components";

const Body = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
`;

const Loader = styled.div`
  width: 10em;
  height: 10em;
  font-size: 25px;
  box-sizing: border-box;
  border-top: 0.3em solid hotpink;
  border-radius: 50%;
  position: relative;
  animation: rotating 2s ease-in-out infinite;

  @keyframes rotating {
    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  :before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
    border-top: 0.3em solid dodgerblue;
    transform: rotate(120deg);
  }

  :after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
    border-top: 0.3em solid gold;
    transform: rotate(240deg);
  }
`;

const Span = styled.span`
  position: absolute;
  color: white;
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: 10em;
  font-family: sans-serif;
  animation: rotating 2s linear infinite;

  @keyframes rotating {
    50% {
      transform: rotate(-180deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

const CSSLoader = () => {
  return (
    <Body>
      <Loader>
        <Span>Loading...</Span>
      </Loader>
    </Body>
  );
};

export default CSSLoader;
