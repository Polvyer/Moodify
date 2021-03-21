import React from 'react';
import styled from 'styled-components';
import Player from './Player';
import YouTubePlayer from './YouTubePlayer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Playlist = ({ playlist, setPlaylist }) => {

  return (
    <Container>
      <Player playlist={playlist} setPlaylist={setPlaylist} />
      <YouTubePlayer />
    </Container>
  );
};

export default Playlist;