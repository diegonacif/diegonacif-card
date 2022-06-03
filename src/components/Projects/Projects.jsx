import React from 'react';
import { ProjectsCards } from '../ProjectsCards/ProjectsCards';
import { Container, Cards } from './styles';

export function Projects() {
  return (
    <Container id="projects">
      <div className="projectsTitle">
        <span>&lt;</span>
        <h2>Projetos</h2>
        <span>&gt;</span>
      </div>
      <Cards>
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
      </Cards>
    </Container>
  );
};