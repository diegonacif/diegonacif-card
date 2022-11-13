import React from 'react';
import { ProjectsCards } from '../ProjectsCards/ProjectsCards';
import { Container, Cards } from './styles';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export function Projects() {

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Container id="projects">
      <div className="projectsTitle">
        <span>&lt;</span>
        <h2>Projetos</h2>
        <span>&gt;</span>
      </div>
      <Cards>
        {/* <Carousel
          responsive={responsive}
          draggable={false}
          ssr={true}
          showDots={true}
          // infinite={true}
          rewind={true}
          rewindWithAnimation={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition={'transform 750ms ease-in-out'}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        </Carousel> */}
        <ProjectsCards repoId='20' />
        <ProjectsCards repoId='5' />
        <ProjectsCards repoId='10'/>
      </Cards>
    </Container>
  );
};