import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kaveeshi Hansala</span>{" "}
            from <span className="purple">Colombo, Sri Lanka</span>.
            <br />
            <br />
            I’m currently a 3rd-year student pursuing a B.Sc. (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka.
            <br />
            I’m an enthusiastic{" "}
            <span className="purple">Full-Stack Developer</span> focused on building robust, functional digital applications across various environments. My hands-on experience includes developing projects using modern frameworks like React.js and Laravel, databases like MongoDB and MySQL, and server-side languages like Node.js and PHP.
            <br />
            <br />
            Outside of academics, I enjoy activities that foster creativity and teamwork, including volunteering and digital design.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to solve complex problems and build user-centric applications!"{" "}
          </p>
          <footer className="blockquote-footer">Kaveeshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
