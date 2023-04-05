import Carousel from "react-multi-carousel";
import banner from "../assets/img/skills-bg.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5 className="mb-3">Frontend Development</h5>
                  <ul>
                    <li>Javascript(ES6)</li>
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 className="mb-3">Backend Development</h5>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Postman</li>
                    <li>MongoDB</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 className="mb-3">Interpersonal Skills</h5>
                  <ul>
                    <li>Adaptability</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Problem solving</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image" src={banner} alt="background-img" />
    </section>
  );
}
