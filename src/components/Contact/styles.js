import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  color: var(--white);
  padding-top: 3.5rem;
  
  section {
    &#leftSection {
      width: clamp(10rem, 90%, 20rem);
  
      .contactTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        row-gap: 1.25rem;
        width: 30rem;
        max-width: 100%;
    
        h2 {
          font-size: 2.5rem;
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
  
      .contactText {
        margin-top: 3rem;
        font-size: 1.3rem;
        text-align: justify;
      }
  
      .contactIcons {
        margin-top: 3rem;
      }
    }

    &#rightSection {
      width: clamp(10rem, 90%, 20rem);
      display: flex;
      flex-direction: column;

      .inputWp {
        display: flex;
        flex-direction: column;
        row-gap: 0.25rem;
        
        input, textarea {
          height: 2rem;
          background-color: var(--gray);
          border: 1px solid var(--blue);
          color: var(--white);
          font-size: 1rem;
          padding: 0.25rem;
        }

        ~ .inputWp {
          margin-top: 1rem;
        }

        textarea {
          height: inherit;
          font-size: 16px;
        }
      }

      button {
        margin-top: 1rem;
        height: 3rem;
        width: 9rem;
        font-size: 1rem;
        background-color: var(--blue);
        border: 0;
        border-radius: 0.25rem;
        color: var(--white);
      }
    }
  }
`