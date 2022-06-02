import React from 'react';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Header } from '../../components/Header/Header';
import { Hello } from '../../components/Hello/Hello';

export function Dashboard() {
  return(
    <>
      <Header />
      <Hello />
      <AboutMe />
    </>
  );
}