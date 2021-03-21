import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  overflow: hidden;
  text-align: center;
`;

const Video = styled.video`
  text-align: center;
`;

const Camera = () => {

  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      }).catch((err) => {
        console.log("An error occurred: " + err);
      });
    
      // Access the tracks that make up the stream (audio or video) and stop each of them individually
      return () => {
        video.srcObject.getTracks().forEach(function(track) {
          track.stop();
        });
      }
  }, []);

  return (
    <div className="camera">
      <video ref={videoRef} width="320" height="240" id="video">Video stream not available.</video>
    </div>
  );
};

export default Camera;