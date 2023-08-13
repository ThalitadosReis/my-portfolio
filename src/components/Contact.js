import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <div className="text-center">
            <div>
              <h2>Contact</h2>
              <p>
                Have a question or want to discuss a project? Feel free to get
                in touch.
              </p>
              <a href="mailto:dosreistha@gmail.com" className="link mt-2">
                <span className="link-text">Get in touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
