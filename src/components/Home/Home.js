import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/image-7.png";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KAVEESHI HANSALA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div className="description-box" style={{ padding: '0 40px', textAlign: "left" }}>
                <p className="home-about-body">
                  A dedicated <b>3rd-year Computing student</b> and passionate <b>Full-Stack Developer</b> focused on building functional, user-centered digital applications using the <b>MERN stack</b>. Eager to apply problem-solving skills in a professional internship environment.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid "
                style={{ maxHeight: "450px",
                  borderRadius: "50%",
                  width: "450px",
                  height: "450px",
                  objectFit: "cover",
                 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SWKHansala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaveeshi-hansala-47707b303/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;