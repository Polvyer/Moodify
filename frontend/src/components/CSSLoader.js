import React from "react";
import styled from "styled-components";



const Body = styled.div`
    $r-dot: 1em;
    $d-dot: 2*$r-dot;
    $l-pad: 6.25*$r-dot; 

    display: grid;
    overflow: hidden;
    margin: 0;
    height: 100vh;
    background: #DD9D14;

    &::before{
        padding: $l-pad + $r-dot;
        background: radial-gradient(#29385E $l-pad - 3*$r-dot, #DD9D14 $l-pad - $d-dot);
        content: '';
    }

    &::after{
        position: absolute;
        top: calc(50% + #{$l-pad}); left: 50%;
        transform: translate(-50%);
        color: rgba(#fff, .5);
        font: 200 1.5em/1.25 sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        animation: f 1s ease-in-out infinite alternate;
        content: 'loading';
    }

    @keyframes f{ to{ opacity: 0 } }

    div, ::before, ::after{
        place-self: center;
        grid-column: 1;
        grid-row: 1;
    }
    .loader{
        display: grid;
        padding: $d-dot;
        background: inherit;
        filter: contrast(9);
        mix-blend-mode: multiply;

        &::before, &::after{
            padding: $l-pad;
            --stops: #fff calc(#{$r-dot} - 1px), transparent #{$r-dot};
            background: 
                radial-gradient(circle at $r-dot, var(--stops)),
                radial-gradient(circle at 50% $r-dot, var(--stops)),
                radial-gradient(circle at calc(100% - #{$r-dot}), var(--stops)),
                radial-gradient(circle at 50% calc(100% - #{$r-dot}), var(--stops));
            filter: blur(9px);
                animation: a .875s ease-in-out infinite;
                content: ''
        }
        &::before { animation-name: b}
    }

    @keyframes a {33.33%, 66.67%{ padding: $r-dot } }

    @keyframes b {
        33.33% { transform: rotate(0deg)} 
        66.67%, 100% { transform: rotate(90deg) }
    }
`;

const CSLoader = () => {
    return (
        <>
          <Body class='loader'/>
        </>
    );
  };


export default CSLoader;