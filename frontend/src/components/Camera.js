import React, { useEffect, useRef } from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  padding: 10px;
  bottom: -25px;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const Camera = ({ setPicture, picture, setShowCamera }) => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log("An error occurred: " + err);
      });

    // Access the tracks that make up the stream (audio or video) and stop each of them individually
    return () => {
      video.srcObject.getTracks().forEach(function (track) {
        track.stop();
      });
    };
  }, []);

  const takePicture = (e) => {
    const context = canvasRef.current.getContext("2d");
    console.log(context);
    context.drawImage(videoRef.current, 0, 0, 380, 240);
    const url = canvasRef.current.toDataURL('image/png');
    changePicture(url);
  };

  const changePicture = (url) => {
      // Remove current picture (if any)
      if (picture.url) { // imageFile !== null (avoid memory issues)
        URL.revokeObjectURL(picture.url);
      }

      // Set picture
      setPicture({
        file: null,
        url
      });

      // Hide camera
      setShowCamera(false);
  };

  return (
    <Container className="camera">
      <canvas ref={canvasRef} width="380" height="300" style={{"display": "none"}}></canvas>
      <video ref={videoRef} width="380" height="300" id="video">
        Video stream not available.
      </video>
      <Button onClick={e => takePicture(e)}>Take photo</Button>
    </Container>
  );
};

export default Camera;
