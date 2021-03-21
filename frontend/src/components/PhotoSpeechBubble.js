import React from 'react';
import styled from "styled-components";

const Bubble = styled.div`
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 25px;
    width: 300px;
    background: #E1C297;
    border-radius: 25px;
    padding: 10px;
    text-align: center;
    color: #fff;

    :before{
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 24px solid #E1C297;
        border-right: 12px solid transparent;
        border-top: 12px solid #E1C297;
        border-bottom: 20px solid transparent;
        left: 32px;
        bottom: -24px;
    }
`;

const PhotoSpeechBubble = () => {
    return(
        <Bubble>
            Click Me to Upload an Image or Take a Picture with a Webcam!
        </Bubble>
    );
};

export default PhotoSpeechBubble;