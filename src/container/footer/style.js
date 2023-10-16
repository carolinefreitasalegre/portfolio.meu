import styled from "styled-components";

export const Container = styled.footer`
  background-color: #353634;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 25rem;

  img {
    background-color: transparent;
    width: 5em;
  }
  a {
    background-color: transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 2px;
  width: 12em;

  a {
    cursor: pointer;
    font-size: 0.8em;
    font-weight: normal;
    text-decoration: none;
    color: #f6f6ea;
    width: 100%;

    &:hover {
      color: #e6324b;
    }
  }
`;
