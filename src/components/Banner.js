import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/header-img.png";
import "animate.css";

export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span style={{ color: "#f9a826" }}>
                    Welcome to my Portfolio
                  </span>
                  <h1>
                    Hi! I'm Thalita, <br />
                    and I build things
                    <span style={{ color: "#f9a826" }}>.</span>
                  </h1>
                  <p>
                    I'm a tech-loving junior full-stack developer who gets a
                    thrill from building innovative applications. With
                    experience in both front-end and back-end development, I can
                    bring a unique perspective to any project.
                  </p>
                  <a href="https://drive.google.com/drive/folders/1Dq8b6aPyxfDkMlHRrKs9ZOeYaILseCI3?usp=sharing">
                    {" "}
                    View Resume <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
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
