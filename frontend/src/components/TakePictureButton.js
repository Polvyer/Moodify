import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: #b24e53;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  
  :focus {
    outline: none;
  }
`;

const TakePictureButton = ({ text, callback }) => {
  return <Button onClick={() => callback(prevState => !prevState)}>{text}</Button>
};

export default TakePictureButton;
