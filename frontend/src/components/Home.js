import React from "react";

const Home = (props) => {
  return (
    <>
      <div>Name: {props.text}</div>
    </>
  );
};

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

export default Home;
