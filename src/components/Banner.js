import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

export default function Banner() {
  return (
    <Container className="banner mt-5 p-md-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5} xl={4}>
          <Container className="mb-5">
            <img src={headerImg} alt="Header Img" />
          </Container>
        </Col>
        <Col xs={12} md={7} xl={8}>
          <Container>
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
            <ul className="buttons">
              <li>
                <a href="https://domain.ext/path">
                  <span>Recent projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M13 17.586V4h-2v13.586l-6.293-6.293-1.414 1.414L12 21.414l8.707-8.707-1.414-1.414L13 17.586z" />
                  </svg>
                </a>
              </li>
            </ul>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
