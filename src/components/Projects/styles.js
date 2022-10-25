import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 80%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  min-height: max-content;
  /* height: calc(100vh - 3.5rem); */
  background-color: var(--black);
  color: var(--white);

  padding-top: 4.5rem;

  .projectsTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      row-gap: 1.25rem;
      width: 30rem;
      max-width: 100%;
  
      h2 {
        font-size: 3rem;
      }
  
      span {
        font-size: 2.5rem;
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

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  width: 100%;
  height: 100%;
`