import React, { useRef } from 'react';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Contact } from '../../components/Contact/Contact';
import { Header } from '../../components/Header/Header';
import { Hello } from '../../components/Hello/Hello';
import { Projects } from '../../components/Projects/Projects';
import { Technologies } from '../../components/Technologies/Technologies';

export function Dashboard() {
  return(
    <>
      <Header />
      <Hello />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}