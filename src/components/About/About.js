import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Compétences </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> Favoris
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
