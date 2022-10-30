import styled from 'styled-components';
import { devices } from '../../styles/devices';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
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
  
      .contactText {
        margin-top: 3rem;
        font-size: 1.25rem;
        text-align: justify;
      }
  
      .contactIcons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 3rem;

        .global-react-icons {
          vertical-align: middle;
          width: 2.5rem;
          height: 2.5rem;
          color: var(--blue);
          transition: color 0.1s, transform 0.1s;
          
          &:hover {
            cursor: pointer;
            color: var(--light-blue);
            transform: scale(1.1);
            transition: color 0.2s, transform 0.2s;
          }
        }
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

          &:focus {
            outline: none;
            border: 1px solid var(--light-blue);
          }          
        }

        ~ .inputWp {
          margin-top: 1rem;
        }

        textarea {
          height: inherit;
          font-size: 1rem;
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

  @media only screen and (${devices.mobile}) {

  }
`