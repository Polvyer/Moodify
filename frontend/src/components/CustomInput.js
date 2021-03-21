import React from "react";
import styled from "styled-components";

const Label = styled.label`
  color: white;
  background-color: #b24e53;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const Input = styled.input`
  display: none;
`;

const CustomInput = ({ changePicture }) => {
  return (
    <Label htmlFor="file-upload">
      <Input onChange={(e) => changePicture(e)} id="file-upload" type="file" />
      Upload Image
    </Label>
  );
};

export default CustomInput;
