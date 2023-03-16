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
                  <h5>
                    Frontend
                    <br />
                    Development
                  </h5>
                  <ul>
                    <li>React</li>
                    <li>Javascript(ES6)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="item">
                  <h5>
                    Backend
                    <br />
                    Development
                  </h5>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div className="item">
                  <h5>
                    Soft
                    <br />
                    Skills
                  </h5>
                  <ul>
                    <li>Adaptability</li>
                    <li>Time-management</li>
                    <li>Well-organized</li>
                    <li>Avid learner</li>
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
