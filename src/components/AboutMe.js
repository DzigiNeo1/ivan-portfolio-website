import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myphoto from "../42590500.jpg";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const AboutMe = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Container id="about" className="about-me-container">
        <Row>
          <Col lg="6" sm="12" m="12px" mt="12" className="col">
            <img
              data-aos="zoom-in-down"
              src={myphoto}
              alt=""
              className="my-img"
            />
          </Col>
          <Col lg="6" sm="12" className="col">
            <h1 className="about-heading">About Me</h1>
            <p className="about-me-p">
              Hello, my name is <b>Stojanovikj Ivan</b>
              <br />
              Web developer with an eye for design, and skilled in HTML, CSS,
              JavaScript, React.js & React-Native, etc.., Innovative problem
              solver passionate about developing apps and ALWAYS learning new
              technologies. Strengths in creativity, teamwork, and transforming
              words and ideas into fully functional and responsive websites and
              apps.
            </p>
            <h2 className="skills-h2">Skills</h2>
            <ul className="skills">
              <li>
                <b>React.js</b>
              </li>
              <li>
                <b>React Hooks</b>
              </li>
              <li>
                <b>JavaScript</b>
              </li>
              <li>
                <b>HTML</b>
              </li>
              <li>
                <b>CSS</b>
              </li>
              <li>
                <b>Bootstrap</b>
              </li>
              <li>
                <b>Next.js</b>
              </li>
              <li>
                <b>Git/Github</b>
              </li>
              <li>
                <b>React-Native</b>
              </li>
              <li>
                <b>EXPO/Android Studio</b>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
