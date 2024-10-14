import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: fixed; /* Fix position to viewport */
  top: 0; /* Align to top */
  left: 0; /* Align to left */
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-color: rgba(255, 255, 255, 0.8); /* Optional: background color for contrast */

  .loader {
    position: relative; /* Change to relative */
    width: 5em;
    height: 5em;
    transform-origin: center center;

    @media (max-width: 768px) {
      width: 4em;
      height: 4em;
    }

    @media (max-width: 480px) {
      width: 3em;
      height: 3em;
    }
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.75em;
    height: 0.75em;
    border-radius: 0.375em;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.5s ease-in-out;

    @media (max-width: 768px) {
      width: 0.6em;
      height: 0.6em;
      border-radius: 0.3em;
    }

    @media (max-width: 480px) {
      width: 0.5em;
      height: 0.5em;
      border-radius: 0.25em;
    }
  }

  .loader:before {
    animation: before8 2s infinite;
  }

  .loader:after {
    animation: after6 2s infinite;
  }

  @keyframes before8 {
    0% {
      width: 0.75em;
      box-shadow: 1.5em -0.75em rgba(225, 20, 98, 0.75), -1.5em 0.75em rgba(111, 202, 220, 0.75);
    }
    35% {
      width: 5em;
      box-shadow: 0 -0.75em rgba(225, 20, 98, 0.75), 0 0.75em rgba(111, 202, 220, 0.75);
    }
    70% {
      width: 0.75em;
      box-shadow: -1.5em -0.75em rgba(225, 20, 98, 0.75), 1.5em 0.75em rgba(111, 202, 220, 0.75);
    }
    100% {
      box-shadow: 1.5em -0.75em rgba(225, 20, 98, 0.75), -1.5em 0.75em rgba(111, 202, 220, 0.75);
    }
  }

  @keyframes after6 {
    0% {
      height: 0.75em;
      box-shadow: 0.75em 1.5em rgba(61, 184, 143, 0.75), -0.75em -1.5em rgba(233, 169, 32, 0.75);
    }
    35% {
      height: 5em;
      box-shadow: 0.75em 0 rgba(61, 184, 143, 0.75), -0.75em 0 rgba(233, 169, 32, 0.75);
    }
    70% {
      height: 0.75em;
      box-shadow: 0.75em -1.5em rgba(61, 184, 143, 0.75), -0.75em 1.5em rgba(233, 169, 32, 0.75);
    }
    100% {
      box-shadow: 0.75em 1.5em rgba(61, 184, 143, 0.75), -0.75em -1.5em rgba(233, 169, 32, 0.75);
    }
  }
`;

export default Loader;
