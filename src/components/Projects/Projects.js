import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shareimmo from "../../Assets/Projects/shareimmo4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes derniers <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Explorez mes réalisations et plongez dans leur univers.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareimmo}
              isBlog={false}
              title="Share Immo"
              description="Découvrez Share Immo, un projet que j'ai développé avec passion dans le cadre de mon cursus à la 3W Academy. Ce projet a été créé pour repenser la façon dont les professionnels de l'immobilier interagissent avec leurs clients."
              ghLink="https://github.com/Neotep/ShareImmo"
              demoLink="https://thibaultaltaber.sites.3wa.io/ShareImmo/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
