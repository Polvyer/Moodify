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
`;

const SubmitButton = ({ callback }) => {
  return (
    <Container>
      <Button onClick={e => callback(e)}>Submit</Button>
    </Container>
  );
};

export default SubmitButton;