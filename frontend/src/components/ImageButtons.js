import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: #b24e53;
  padding: 10px;
  border: 1px solid black;
`;

const ImageButtons = (props) => {
  return (
    <>
      <Button>{props.text}</Button>
    </>
  );
};

export default ImageButtons;
