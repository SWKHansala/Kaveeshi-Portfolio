import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import HTML from "../../Assets/TechIcons/html.svg";
import CSS from "../../Assets/TechIcons/css.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="html" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" className="tech-icon-images" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" className="tech-icon-images" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" className="tech-icon-images" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" className="tech-icon-images" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" className="tech-icon-images" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
