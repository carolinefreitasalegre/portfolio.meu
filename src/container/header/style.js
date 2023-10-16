import styled from "styled-components";

export const Container = styled.header`
  background-color: #f6f6ea;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  gap: 8rem;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &.with-box-shadow {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  img {
    width: 4em;
  }

  > svg {
    top: 1;
    right: 0;
    margin-right: 2em;
    position: fixed;
    color: #e6324b;
    font-size: 2em;
    opacity: 0;
  }

  @media (max-width: 700px) {
    svg {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #e6324b;
    height: 3em;
    display: flex;
    align-items: center;
    padding: 2px 5px;
    font-size: 0.8em;
    transition: all 1s;
    border-radius: 4px;

    &:hover {
      border-bottom: 2px solid #e6324b;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.475);
    }

    &:focus {
      color: #0000;
      border-bottom: 2px solid #e6324b;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.475);
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  .contact {
    border: 1px solid #e6324b;
    transition: all 1s;

    &:hover {
      background-color: #e6324b;
      color: #f6f6ea;
    }
  }
`;
