import React, { useEffect } from "react";
import "./Portfolio.css";
import { Container, Button, Card, Row } from "react-bootstrap";
import Auth from "../Images/Auth-app.png";
import Meals from "../Images/Meals-app.png";
import PigGame from "../Images/Pig-game.png";
import Todo from "../Images/Todo-app.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div id="portfolio" className="portfolio-wrapper">
        <Container className="my-cards" data-aos="fade-right">
          <Row className=" h2 py-2 justify-content-center text-uppercase text-center primary">
            <h1 className="row-h1">Portfolio</h1>
          </Row>
          <Row className="justify-content-center p-5">
            <Card
              data-aos="fade-up"
              bg="light"
              className="cards mx-1 py-2"
              style={{ width: "240px" }}
            >
              <Card.Img variant="top" src={Auth} />
              <Card.Body>
                <Card.Title>AuthenticationApp</Card.Title>
                <Card.Text as="p-text">
                  AuthenticationApp using Firebase to setup login and register
                  options.
                </Card.Text>
                <Button
                  href="https://github.com/DzigiNeo1/AuthenticationDemoApp/tree/master"
                  variant="secondary"
                >
                  Check it out!
                </Button>
              </Card.Body>
            </Card>
            <Card
              data-aos="fade-up"
              bg="light"
              className="cards mx-1 py-2"
              style={{ width: "240px" }}
            >
              <Card.Img variant="top" src={Meals} />
              <Card.Body>
                <Card.Title>MealsApp</Card.Title>
                <Card.Text as="p-text">
                  Meals app using redux to control state dynamicly.
                </Card.Text>
                <Button
                  href="https://github.com/DzigiNeo1/AuthenticationDemoApp/tree/master"
                  variant="secondary"
                >
                  Check it out!
                </Button>
              </Card.Body>
            </Card>
            <Card
              data-aos="fade-up"
              bg="light"
              className="cards mx-1 py-2"
              style={{ width: "240px" }}
            >
              <Card.Img variant="top" src={PigGame} />
              <Card.Body>
                <Card.Title>PigGame</Card.Title>
                <Card.Text as="p-text">
                  Pig is a simple dice game. Players take turns to roll a single
                  dice as many times as they wish.
                </Card.Text>
                <Button
                  href="https://github.com/DzigiNeo1/AuthenticationDemoApp/tree/master"
                  variant="secondary"
                >
                  Check it out!
                </Button>
              </Card.Body>
            </Card>
            <Card
              data-aos="fade-right"
              bg="light"
              className="cards mx-1 py-2"
              style={{ width: "240px" }}
            >
              <Card.Img variant="top" src={Todo} />
              <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text as="p-text">
                  Todo App here you can edit a task, remove it, add
                </Card.Text>
                <Button
                  href="https://github.com/DzigiNeo1/AuthenticationDemoApp/tree/master"
                  variant="secondary"
                  className="d-f "
                >
                  Check it out!
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;

/* <h1 className="text-uppercase text-center py-5">portfolio</h1>
  <div className="image-box-wrapper row justify-content-center">
  <div className="portoflio-image-box ">
    <img className="portfolio-img" src={Auth} alt="AuthenticationApp" />
  </div>
  <div className="portoflio-image-box ">
  <img className="portfolio-img" src={Meals} alt="MealsProject" />
</div>
<div className="portoflio-image-box ">
  <img className="portfolio-img" src={PigGame} alt="PigGame" />
</div>
<div className="portoflio-image-box ">
  <img className="portfolio-img" src={Todo} alt="TodoApp" />
</div>
</div> */
