import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
    background: #E1C297;
    color: white;
    text-align: center;
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 25px;
    width: 300px;
    border-radius: 25px;
    padding: 10px;
    text-align: center;

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
        bottom: -24px; }
`;

const SpeechBubble = () => {
    return (
        <>
            <Bubble>
                Hello, we are Moodify! Let us find out how you are feeling to select the right playlist for you!
            </Bubble>
          
        </>
    );
  };

export default SpeechBubble;