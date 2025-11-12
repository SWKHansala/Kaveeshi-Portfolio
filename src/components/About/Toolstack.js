import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import figma from "../../Assets/TechIcons/figma.svg";
import canva from "../../Assets/TechIcons/canva.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={canva} alt="Canva" className="tech-icon-images" />
        <div className="tech-icons-text">Canva</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
