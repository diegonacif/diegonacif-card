import React from "react";
import { Container, Screenshot } from './styles';

export function ProjectsCards() {
  return (
    <Container>
      <Screenshot />
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ducimus obcaecati labore reiciendis aliquid saepe unde commodi dicta natus aut blanditiis laborum id recusandae earum rem, a quisquam libero ex?</span>
      <div className="buttons">
        <button>VER O SITE</button>
        <button>GITHUB</button>
      </div>
    </Container>
  );
};