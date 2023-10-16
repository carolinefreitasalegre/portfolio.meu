import styled from "styled-components";

export const Container = styled.section`
  color: #e6324b;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 5rem;
  }

  @media (max-width: 514px) {
    height: 70vh;
    padding: 0 25px;
    flex-direction: column;

    img {
      margin-top: -5em;
      width: 15em;
    }
  }

  @media (max-width: 390px) {
    padding: 0 1em;
  }
`;
