import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  padding: 0 2rem;

  img {
    background-color: transparent;

    width: 25rem;
  }

  .slide-bottom {
    animation: slide-bottom 5s infinite linear;
  }
  @keyframes slide-bottom {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(100px);
    }
  }

  @media (max-width: 800px) {
    height: 115vh;
    flex-direction: column;
  }

  @media (max-width: 514px) {
    height: 120vh;
    flex-direction: column;
    margin-top: 1em;
    margin-left: 2em;

    img {
      margin-top: -5em;
      width: 15em;
    }
  }

  @media (max-width: 390px) {
    font-size: 0.8em;
    margin-left: 5em;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
  flex-direction: column;
  font-size: 2rem;

  .name {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid transparent;
    animation: typing 3s steps(12, end), blink-caret 0.5s step-end infinite;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #e6324b;
      }
    }
  }

  @media (max-width: 514px) {
    font-size: 1.5em;
    flex-direction: column;
  }
`;
export const Icons = styled.div`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: #e6324b;
  }
`;
