import React, { useEffect, useRef } from "react";

const Camera = ({ setPicture }) => {
  const videoRef = useRef();

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

  return (
    <div className="camera">
      <video ref={videoRef} width="380" height="300" id="video">
        Video stream not available.
      </video>
    </div>
  );
};

export default Camera;
