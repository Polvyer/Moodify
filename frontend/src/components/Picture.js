import React from "react";
import styled from "styled-components";
import Placeholder from "../assets/images/imagePlace.jpg";

const Image = styled.img`
  width: 20em;
  height: 100%;
`;

const Picture = ({ picture }) => {
  return (
    <Image
      src={picture.url ? picture.url : Placeholder}
      alt="Placeholder image"
    ></Image>
  );
};

export default Picture;
