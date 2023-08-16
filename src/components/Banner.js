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
            <button className="link">
              <span className="link-text">Recent projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
