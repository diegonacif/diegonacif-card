import styled from 'styled-components';

export const Container = styled.main`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100vw;
  height: 3.5rem;
  background-color: var(--gray);
  color: var(--white);

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
    
  }

  h1 {
    font-size: 1.8rem;
  }

  .menus {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: min-content;
    width: 25rem;
    height: 100%;
    font-size: 1.25rem;
  }

  .myName {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: min-content;
    width: max-content;
    height: 100%;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--blue);

      &:nth-of-type(1) {
        margin-right: 0.25rem;
      }

      &:nth-of-type(2) {
        margin-left: 0.25rem;
      }
    }
  }
`