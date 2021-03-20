import React from "react";
import Home from './components/Home';
import styled from 'styled-components';

const Button = styled.button`
  color: blue;
  background-color: red;
  padding: 10px;
  border: 1px solid black;
`;

const App = () => {
  return (
    <div>
      <p>Hello World!</p>
      <Home text="Amy" />
      <Home text="Jasmine" />
      <Button>Click me!</Button>
    </div>
  );
};

export default App;
