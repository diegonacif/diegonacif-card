import styled from 'styled-components';
import photograph from '../../assets/justMe.png';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  /* height: calc(100vh - 3.5rem); */
  height: 100vh;
  background-color: var(--gray);
  color: var(--white);


  section {
    width: 30rem;
    max-width: 100%;

    .aboutMe {
      display: flex;
      align-items: center;
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

    .aboutMeText {
      margin-top: 2.5rem;
      font-size: 1.25rem;
      line-height: 1.75rem;

      p:nth-child(2) {
        margin-top: 1rem;
      }
    }

  }

  .myPhoto {
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    background: url(${photograph});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`