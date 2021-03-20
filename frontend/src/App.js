import React from "react";
import Home from './components/Home';
import ImageButtons from './components/ImageButtons';
import styled from 'styled-components';
import images from './assets/images/imagePlace.jpg'
import FileInput from './components/FileInput'

/*const Button = styled.button`
  color: blue;
  background-color: red;
  padding: 10px;
  border: 1px solid black;
`;
*/

/*const App = () => {
  return (
    <div>
      <p>Hello World!</p>
      <Home text="Amy" />
      <Home text="Jasmine" />
      <Button>Click me!</Button>
    </div>
  );
};
*/


const Title = styled.h1`
  font-size: 3em;
  color: #191f31;
  text-align: center;
`;

const Img1 = styled.img`
  width: 275px;
  height: 275px;
`;

const Text1 = styled.div`
  color: white; 
  text-align: center;

`;


const App = () => {
  return (
    <>
      <Title>Moodify</Title>
      <div>
        <Img1 src={images} alt="Placeholder Image"></Img1>
        <div>
            <ImageButtons text="Upload Image"/>
            <Text1>Or</Text1>
            <ImageButtons text="Upload Image"/>
        </div>

        <div>
          <input type="file" accept="image/png, image/jpeg"/>
        </div>
      </div>

    </>
  );
};

export default App;
