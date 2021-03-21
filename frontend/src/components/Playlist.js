import React from "react";
import styled from "styled-components";
import Player from "./Player";
import YouTubePlayer from "./YouTubePlayer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Playlist = ({ playlist, setPlaylist, mood, gif }) => {
  return (
    <Container>
      <Player gif={gif} mood={mood} playlist={playlist} setPlaylist={setPlaylist} />
      <YouTubePlayer />
    </Container>
  );
};

export default Playlist;
