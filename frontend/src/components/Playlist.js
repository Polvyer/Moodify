import React, { useState } from "react";
import styled from "styled-components";
import Player from "./Player";
import YouTubePlayer from "./YouTubePlayer";
import YouTubeAPI from "../api/YouTubeAPI";
import { YOUTUBE_EMBED_URL } from "../constants/constants";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Playlist = ({ playlist, setPlaylist, mood, gif, apiKey }) => {
  const [url, setUrl] = useState(YOUTUBE_EMBED_URL + "oF9yHO-UUws");

  const selectUrl = async (track, e) => {
    try {
      const response = await YouTubeAPI.search(
        apiKey,
        track.name + " " + track.artists[0].name
      );
      setUrl(
        YOUTUBE_EMBED_URL + response.data.items[0].id.videoId + "?autoplay=1"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Player
        gif={gif}
        mood={mood}
        playlist={playlist}
        setPlaylist={setPlaylist}
        selectUrl={selectUrl}
      />
      <YouTubePlayer url={url} />
    </Container>
  );
};

export default Playlist;
