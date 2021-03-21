import React from "react";

const YouTubePlayer = () => {
  const url = "https://www.youtube.com/embed/E7wJTI-1dvQ";

  return (
    <iframe
      src={url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="video"
    />
  );
};

export default YouTubePlayer;
