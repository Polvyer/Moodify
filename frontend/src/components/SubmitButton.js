import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #DD9D14;
  padding: 15px;
  border: none;
  color: white;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 1.2rem;
  margin-bottom: 30px;
  cursor: pointer;
`;

const DisabledButton = styled.button`
  background-color: rgba(221, 157, 20, 0.5);
  padding: 15px;
  border: none;
  color: white;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 1.2rem;
  margin-bottom: 30px;
  cursor: not-allowed;
`;

const SubmitButton = ({ callback, picture, showCamera, disabled }) => {
  return (
    <Container>
      {!disabled && picture.file && !showCamera ? <Button onClick={e => callback(e)}>Submit</Button> : <DisabledButton disabled >Submit</DisabledButton>}
    </Container>
  );
};

export default SubmitButton;