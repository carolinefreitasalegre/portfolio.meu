import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30%;
  text-align: justify;
  gap: 5px;

  label {
    display: flex;
    width: 100%;
    text-align: justify;
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5vh;
  outline: none;
  border-radius: 4px;
  border: 2px solid #e6324b;
  color: #e6324b;
  padding: 4px 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 2px solid #e6324b;
  color: #e6324b;
  text-transform: capitalize;
  padding: 4px 5px;
`;
export const Button = styled.button`
  width: 100%;
  background-color: #e6324b;
  height: 5vh;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1em;
  color: #f6f6ea;
  font-size: 1.2em;
  transition: all 1s;

  &:hover {
    opacity: 0.8;
  }
`;
