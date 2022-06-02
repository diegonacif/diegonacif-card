import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  color: var(--white);

  .helloText {
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    width: 30rem;
    max-width: 100%;

    span {
      font-size: 2rem;
    }

    .myName {
      display: flex;

      h2 {
        font-size: 5rem;

        &:last-child {
          color: var(--blue);
        }
      }
    }

    .buttons {
      display: flex;
      height: 3.25rem;
      width: 100%;
      margin-top: 1.75rem;

      button {
        width: 11rem;
        border: 0;
        border-radius: 0.25rem;
        color: var(--white);
        font-weight: bold;
        font-size: 1rem;
        
        &:first-child {
          background-color: var(--blue);
          /* filter: brightness(1.4); */
          border: 2px solid var(--blue);
        }

        &:last-child {
          background-color: transparent;
          border: 2px solid var(--white);
          margin-left: 1rem;
        }
        
      }
    }
  }
`