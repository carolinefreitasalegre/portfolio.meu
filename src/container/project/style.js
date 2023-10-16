import styled from "styled-components";

export const Container = styled.section`
  min-height: 110vh;
  background-color: #e6324b;
  width: 100%;
  padding: 10rem 5rem;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  .card {
    background-color: yellow;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    box-shadow: 2px 2px 10px grey;

    a {
      color: #e6324b;
    }

    @media (max-width: 514px) {
      width: 100%;
      width: 20em;
    }
  }
`;
