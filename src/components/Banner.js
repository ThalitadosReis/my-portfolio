import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import resume from "../assets/resume.pdf";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>
                Hi! I'm Thalita, <br />
                and I build things
                <span style={{ color: "#83b8ff" }}>.</span>
              </h1>
              <p>
                I'm a tech-loving junior full-stack developer who gets a thrill
                from building innovative applications. With experience in both
                front-end and back-end development, I can bring a unique
                perspective to any project.
              </p>
              <a
                href={resume}
                download="Thalita dos Reis Resume.pdf"
                className="link"
              >
                <span className="link-text">Download Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
