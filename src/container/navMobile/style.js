import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  position: absolute;
  background: rgb(246, 246, 234);
  background: linear-gradient(
    40deg,
    rgba(246, 246, 234, 1) -2630%,
    rgba(230, 50, 75, 0.571953781512605) -1038%
  );
  z-index: 2;
  top: 0;
`;

export const Nav = styled.nav`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(3px);
  background: rgb(246, 246, 234);
  background: linear-gradient(
    40deg,
    rgba(246, 246, 234, 1) -2630%,
    rgba(230, 50, 75, 0.571953781512605) -1038%
  );

  > svg {
    background-color: transparent;
    font-size: 3em;
    margin-bottom: 2em;
    pointer-events: none;
  }

  a {
    height: 10vh;
    background-color: transparent;
    color: #f6f6ea;
    font-size: 1.2em;
    font-weight: bolder;
    gap: 5px;
  }

  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`;
