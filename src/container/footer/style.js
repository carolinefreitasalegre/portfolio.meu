import styled from "styled-components";

export const Container = styled.footer`
  background-color: #353634;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  img {
    background-color: transparent;
    width: 5em;
  }
  a {
    background-color: transparent;
  }

  @media (max-width: 550px) {
    gap: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 2px;
  width: 12em;

  a {
    z-index: 2;
    background-color: transparent;
    color: #f6f6ea;
    padding: 2px 5px;
    transition: 1s;

    > svg {
      background-color: transparent;
      color: #f6f6ea;
    }

    &:hover {
      color: #e6324b;
      margin-left: 1em;
    }
  }
`;
