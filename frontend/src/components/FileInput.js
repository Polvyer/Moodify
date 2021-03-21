import React from "react";
import styled from "styled-components";

const Button = styled.input`
  color: white;
  background-color: #b24e53;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.2rem;
`;

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="file" accept = "image/png, image/jpeg" ref={this.fileInput} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
