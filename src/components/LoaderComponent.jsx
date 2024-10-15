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
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 50%; // This maintains the aspect ratio

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5em; /* Increased from 2.5em */
    height: 5em; /* Increased from 2.5em */
    transform-origin: center center;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.75em; /* Increased from 0.5em */
    height: 0.75em; /* Increased from 0.5em */
    border-radius: 0.375em; /* Increased from 0.25em */
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.5s ease-in-out;
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