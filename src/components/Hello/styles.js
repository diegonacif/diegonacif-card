import styled, { keyframes } from 'styled-components';
import blob from '../../assets/blob.svg';
import { devices } from '../../styles/devices';


export const Container = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  color: var(--white);

  .artWp {
    position: relative;
    width: 100%;
    height: 100%;

    #blobBg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22rem;
      height: 19rem;

      background: url(${blob});
      background-size: 33rem;
      background-position: center center;
      background-repeat: no-repeat;      
    }
      
    #chibiImg {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 69%;
      left: 57%;

      width: 21rem;      
    }

    .reactBg {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      top: 5.4rem;
      left: 2.9rem;
      width: 3rem;
      height: 3rem;
      background-color: var(--gray);

      #reactLogo {
        position: absolute;
        width: 2.5rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }     
    }

    .cssBg {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      top: 44%;
      left: 2%;
      width: 2.9rem;
      height: 2.9rem;
      border-radius: 50%;
      background-color: #e3622b;

      img {
        width: 69%;
        transform: translateY(0.1rem);
      }
    }

    .htmlBg {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 63%;
      left: 4.7%;
      width: 2.9rem;
      height: 2.9rem;
      border-radius: 50%;
      background-color: rgb(10, 61, 173);

      img {
        width: 59%;
        transform: translateY(0.1rem);
      }
    }

    .sassBg {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 18%;
      left: 46%;
      width: 2.9rem;
      height: 2.9rem;
      border-radius: 50%;
      background-color: #DC84AE;

      img {
        width: 72%;
        /* transform: translateY(0.1rem); */
      }
    }

    .jsBg {
      position: absolute;
      top: 18.5%;
      left: 28%;
      width: 3.2rem;

      img {
        width: 100%;
      }
    }
  }

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

  @media only screen and (${devices.mobile}) {
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    padding: 0 1rem;

    .artWp {
      order: 1;
    }

    .helloText {
      order: 2;
      row-gap: 1rem;
      align-items: center;

      span {
        font-size: 1.5rem;
      }

      .myName {
        h2 {
          font-size: 3.5rem;
        }
      }

      .buttons {
        justify-content: center;
        height: 3rem;

        button {
          width: 10rem;

        }
      }
    }
  }
`

const rotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Rotate = styled.div`

  display: inline-block;
  animation: ${rotate} 15s linear infinite;
`;