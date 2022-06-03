import React, { useRef } from 'react';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Header } from '../../components/Header/Header';
import { Hello } from '../../components/Hello/Hello';
import { Projects } from '../../components/Projects/Projects';

export function Dashboard() {
  return(
    <>
      <Header />
      <Hello />
      <AboutMe />
      <Projects />
    </>
  );
}