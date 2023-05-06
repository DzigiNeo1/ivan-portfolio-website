import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import "./ContactMe.css";

export const ContactMe = () => {
  const serviceId = "service_ID";
  const templateId = "template_ID";
  const userId = "LVbju1oEzEqz9aDpI";

  const [enteredName, setEnterdName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [isTouched, setIstouched] = useState(false);

  const [enteredLastName, setlastName] = useState("");
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const [enteredEmail, setEnterdEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [emalIsTouched, setEmailIstouched] = useState(false);

  const [enteredSubject, setEnterdSubject] = useState("");
  const [enteredSubjectIsValid, setEnteredSubjectIsValid] = useState(false);
  const [subjectIsTouched, setSubjectIstouched] = useState(false);

  const [enteredDescription, setEnterdDescription] = useState("");
  const [enteredDescriptionIsValid, setEnteredDescriptionIsValid] =useState(false);
  const [descriptionIsTouched, setDescriptionIstouched] = useState(false);

  
  const [successMessage, showSuccessMessage] = useState('')


  const onLastNameChangeHandler = (e) => {
    setlastName(e.target.value);
    if (e.target.value !== "") {
      setEnteredLastNameIsValid(true);
    }
  };
  const onDescriptionChangeHandler = (e) => {
    setEnterdDescription(e.target.value);
    if (e.target.value !== "") {
      setEnteredDescriptionIsValid(true);
    }
  };
  const onEmailChangeHandler = (e) => {
    setEnterdEmail(e.target.value);
    if (e.target.value !== "") {
      setEnteredEmailIsValid(true);
    }
  };
  const onSubjectChangeHandler = (e) => {
    setEnterdSubject(e.target.value);
    if (e.target.value !== "") {
      setEnteredSubjectIsValid(true);
    }
  };

  const onChangeHandler = (e) => {
    setEnterdName(e.target.value);
    if (e.target.value != "") {
      setEnteredNameIsValid(true);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLastNameTouched(true);
    setSubjectIstouched(true);
    setEmailIstouched(true);
    setDescriptionIstouched(true);
    setIstouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (enteredDescription.trim() === "") {
      setEnteredDescriptionIsValid(false);
      return;
    }
    if (enteredSubject.trim() === "") {
      setEnteredSubjectIsValid(false);
      return;
    }
    if (enteredLastName.trim() === "") {
      setEnteredLastNameIsValid(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        showSuccessMessage(<p className="success">you have successfully submitted this form!</p>)
      },
      (error) => {
        console.log(error.text);
      }
    );

    setEnterdSubject("");
    setEnterdEmail("");
    setEnterdDescription("");
    setEnterdName("");
    setlastName("");
  };

  const lastNameInput = !enteredLastNameIsValid && lastNameTouched;
  const subjectInput = !enteredSubjectIsValid && subjectIsTouched;
  const descriptionInput = !enteredDescriptionIsValid && descriptionIsTouched;
  const emailInput = !enteredEmailIsValid && emalIsTouched;
  const nameInputIsInvalid = !enteredNameIsValid && isTouched;
  return (
    <>
      <div id="contact" className="contact-me">
        <div className="text-center">
          <h1>Contact me</h1>
          <span>
            Please fill out the form and I'll contact you as soon as possible.
          </span>
        </div>

        <Form ref={form} onSubmit={sendEmail}>
          <Container>
            <Row>
              <Col md={6} lg={6} sm={12} xs={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={onChangeHandler}
                    value={enteredName}
                  />
                </Form.Group>
                {nameInputIsInvalid && <p>Enter your name please!</p>}
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="last name"
                    placeholder="Enter your last name "
                    name="last name"
                    onChange={onLastNameChangeHandler}
                    value={enteredLastName}
                  />
                </Form.Group>
                {lastNameInput && <p>Enter your last name please!</p>}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={onEmailChangeHandler}
                    value={enteredEmail}
                  />
                </Form.Group>
                {emailInput && <p>Enter your Email please!</p>}
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="subject"
                    placeholder="Enter Subject"
                    name="subject"
                    onChange={onSubjectChangeHandler}
                    value={enteredSubject}
                  />
                </Form.Group>
                {subjectInput && <p>Eneter your Subject please!</p>}
              </Col>

              <Col
                md={4}
                lg={4}
                sm={12}
                xs={12}
                className="ms-auto justify-content-end"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows={3}
                    onChange={onDescriptionChangeHandler}
                    value={enteredDescription}
                  />
                </Form.Group>
                {descriptionInput && <p>Enter your description please!</p>}
                <Button
                  type="submit"
                  value="send"
                  variant="secondary"
                  md={4}
                  lg={4}
                  sm={12}
                  xs={12}
                >
                  Submit
                </Button>
                {successMessage}
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
};

export default ContactMe;
