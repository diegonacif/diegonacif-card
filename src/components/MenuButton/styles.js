import styled, { keyframes } from 'styled-components';
import { devices } from '../../styles/devices';

export const Container = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 100%;

  section {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 9rem;
    background-color: var(--blue-mirror);
    height: max-content;
    top: 3.3rem;
    right: 2.8rem;
    padding: 1rem 0.5rem;
    border-radius: 4px;

    .menu-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      & + .menu-item {
        margin-top: 1rem;
      }

      a {
        font-size: 1.125rem;
        font-weight: bold;
      }
    }
  }
`