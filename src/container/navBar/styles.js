import styled from "styled-components";

export const NavBarSide = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgb(246, 246, 234);
  background: linear-gradient(
    40deg,
    rgba(246, 246, 234, 0.8) -2630%,
    rgba(230, 50, 75, 0.8) -1038%
  );
  backdrop-filter: blur(3px);
  color: white;
  justify-content: center;
  gap: 1.5em;
  font-size: 1.5rem;

  a {
    background-color: transparent;
    text-decoration: none;
    color: white;
    width: 100%;
    text-align: center;
    transition: 1s;

    &:hover {
      margin-left: 1em;
    }
  }
`;
