import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #DD9D14;
  padding: 10px;
  border: none;
  color: white;
`;

const SubmitButton = ({ callback }) => {
  return (
    <Container>
      <Button onClick={e => callback(e)}>Submit</Button>
    </Container>
  );
};

export default SubmitButton;