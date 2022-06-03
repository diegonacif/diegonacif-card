import styled from 'styled-components';
import underConstruction from '../../assets/underConstruction.jpeg';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 13rem auto 4rem;
  align-items: center;
  justify-items: center;
  width: 20rem;
  height: 28rem;
  padding: 1rem;
  border-radius: 0.25rem;

  background-color: var(--gray);
  color: var(--white);

  .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      button {
        width: 8rem;
        height: 2.5rem;
        border: 0;
        border-radius: 0.25rem;
        color: var(--white);
        /* font-weight: bold; */
        font-size: 0.75rem;
        
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
  `

  export const Screenshot = styled.div`
    width: 100%;
    height: 12rem;
    background: url(${underConstruction});
    background-size: cover;
    background-position: center center;
    border-radius: 0.25rem;
  `