import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je me{" "}
              <span className="purple">
                {" "}
                présente{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle Thibault Altaber et je suis un Développeur Web situé
              sur Bordeaux. Après une reconversion professionnelle réussie en
              2022, j'ai obtenu mon diplôme et je continue d'approfondir mes
              connaissances en travaillant sur divers projets.
              <br />
              <br />
              Je suis polyvalent et passionné par les technologies front-end et
              back-end. Ma curiosité insatiable me pousse à apprendre
              continuellement. J'aime travailler sur des projets qui me mettent
              au défi et me permettent de développer de nouvelles compétences.
              <br />
              <br />
              Actuellement, je suis en cours de formation avec Data Scientest
              pour me qualifier en tant que Développeur EAI pour une grande
              entreprise.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Mes réseaux</h1>
            <p>
              N'hésitez pas à me{" "}
              <span style={{ textDecoration: "underline" }} className="purple">
                contacter
              </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Neotep"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thibault-altaber/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tibzow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
