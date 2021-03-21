import React from "react";
import Trash from "../assets/images/trash.svg";
import List from "../assets/images/list.svg";
import styled from "styled-components";

const Li = styled.li`
  border-bottom: 1px solid #e1e1e6;
  padding: 5px 20px 5px 10px;
  color: black;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1029px) {
    width: 100%;
  }
  .drag {
    visibility: hidden;
    margin-right: 10px;
  }
  .circle-audio-player {
    visibility: hidden;
  }
  .trash {
    visibility: hidden;
    width: 2.1em;
    margin-left: 5px;
  }
  :hover {
    background-color: #73c9b9;
    color: white;
    .drag {
      visibility: visible;
    }
    .circle-audio-player {
      visibility: visible;
      cursor: pointer;
    }
    .trash {
      visibility: visible;
      cursor: pointer;
    }
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const Drag = styled.div`
  width: 30px;
  height: 20px;
  cursor: move;
  background-image: ${(props) => `url(${props.background})`};
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 3px -1px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Track = ({
  track,
  trackPlaying,
  setTrackPlaying,
  removeTrack,
  handleDragStart,
  handleDragEnter,
  handleDrop,
  draggable,
  setDraggable,
  dataTransfer,
  handleDragOver,
  handleDragEnd,
}) => {
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  return (
    <Li
      className={dataTransfer === track.id ? "hidden" : "visible"}
      draggable={draggable}
      onDragEnd={handleDragEnd.bind(null)}
      onDragStart={handleDragStart.bind(null, track.id)}
      onDrop={handleDrop.bind(null, track.id)}
      onDragEnter={handleDragEnter.bind(null, track.id)}
      onDragLeave={handleDragLeave.bind(null)}
      onDragOver={handleDragOver.bind(null)}
    >
      <Text>
        <Drag
          onMouseDown={setDraggable.bind(null, true)}
          onMouseUp={setDraggable.bind(null, false)}
          background={List}
          className="drag"
        ></Drag>
        <span>{track.name}, {track.artists[0].name}</span>
      </Text>
      <Icons>
        <div className="circle-audio-player"></div>
        <img
          onClick={removeTrack.bind(null, track.id)}
          className="trash"
          src={Trash}
          alt="Trash"
        />
      </Icons>
    </Li>
  );
};

export default Track;
