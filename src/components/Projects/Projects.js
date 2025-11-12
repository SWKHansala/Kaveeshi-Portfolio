import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reportEase from "../../Assets/Projects/ReportEase.png";
import student from "../../Assets/Projects/Student-Management.png";
import market from "../../Assets/Projects/SuperMarket.png";
import booking from "../../Assets/Projects/Booking.png";
import waveWords from "../../Assets/Projects/WaveWords.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Appointment Booking System"
              description="Developing a full-stack appointment management system. Completed the responsive React frontend with Tailwind CSS and implemented client-side validation. Currently building RESTful APIs with JWT authentication."
              ghLink="https://github.com/SWKHansala/AppointmentBookingSystem"
              demoLink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Management System"
              description="Built a web application for managing student records, attendance, and grades. The system supports full CRUD (Create, Read, Update, Delete) functionality for data management."
              ghLink="https://github.com/SWKHansala/student-management-system"
              demoLink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reportEase}
              isBlog={false}
              title="Issue Reporting System"
              description="Designed and implemented a web-based system for users to submit, track, and resolve technical issues or bugs. Features included user authentication, categorization of issues (e.g., Critical, Low Priority), and a dashboard for administrators/developers to manage the status of reported issues."
              ghLink="https://github.com/KavinduAluthwaththa/ReportEase"
              demoLink             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waveWords}
              isBlog={false}
              title="WaveWord: AI Hand Sign Recognition App"
              description="Developed an AI application capable of real-time hand sign recognition. The project involved integrating a TensorFlow model to translate sign language gestures into text, utilizing Firebase for backend/database services."
              ghLink="https://github.com/NavinduR2001/hand-sign-recognize-mobile-app"
              demoLink
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="E-commerce Platform Project"
              description="Designed and developed a responsive e-commerce interface for a supermarket. Focused on creating interactive UI elements and shopping cart functionality, highlighting layout design and navigation flow to enhance the customer browsing experience."
              ghLink="https://github.com/SWKHansala/Supermarket-Website"
              demoLink
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
