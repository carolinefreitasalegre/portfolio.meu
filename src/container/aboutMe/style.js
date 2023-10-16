import styled from "styled-components";

export const Container = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    width: 25rem;
    border: 2px solid #e6324b;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 514px) {
    height: 130vh;
    flex-direction: column;

    img {
      margin-top: -5em;
      width: 15em;
    }
  }
`;

export const Text = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1.2rem;
  text-align: end;
  border: 1px solid #e6324b;
  border-bottom: 1px solid #af94f5;
  border-top: 1px solid #af94f5;
  padding: 10px;

  border-radius: 15px 0px 15px 0;

  @media (max-width: 1024px) {
    width: 90%;
  }

  a {
    text-decoration: none;
    color: #e6324b;
    border: 2px solid;
    width: 50%;
    padding: 5px;
    transition: all 1s;
    text-align: center;
    margin-left: 11em;

    &:hover {
      background-color: #e6324b;
      color: #f6f6ea;
      border-radius: 4px;
      margin-right: 2em;
    }
  }

  @media (max-width: 500px) {
    width: 70%;

    a {
      margin: auto;
    }
  }
`;
