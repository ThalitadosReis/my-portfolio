import { useState } from "react";
import { Col } from "react-bootstrap";
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#121212",
    border: 0,
    borderRadius: "30px",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

export default function ProjectCard({ title, tech, imgUrl, demoUrl, about, githubUrl }) {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="page-content" onClick={openModal}>
        <img src={imgUrl} alt="" />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{about}</p>
          <p className="tech-stack">
            <b>Tech stack:</b> {tech}
          </p>
          <div className="modal-links">
            <a href={demoUrl}>Demo</a>
            <a href={githubUrl}>Github</a>
          </div>
        </div>
      </Modal>
    </Col>
  );
}
