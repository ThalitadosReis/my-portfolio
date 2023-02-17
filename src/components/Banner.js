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
                  <span style={{color: "#f9a826"}}>Welcome to my Portfolio</span>
                  <h1>
                    Hi! I'm Thalita,{" "}
                    <br />
                    and I build things
                    <span style={{ color: "#f9a826" }}>.</span>
                  </h1>
                  <p>
                    I am an enthusiastic Junior Full-Stack Developer with a
                    love for crafting amazing web applications.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Download CV <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
