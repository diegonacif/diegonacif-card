import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 80%;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--gray);
  color: var(--white);

  padding-top: 4.5rem;

  .techTitle {
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

  export const Techs = styled.div`
    /* width: 100%; */
    /* min-width: min-content; */
    width: clamp(15rem, 80rem, 100%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `

  export const TechCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
    min-width: 15rem;
    height: max-content;
    /* background-color: var(--green); */
    font-weight: 700;

    img {
      width: 100%;

      &#jsImg {
        width: 10rem;
        margin: 1.8rem 0;
      }
    }
    
  `