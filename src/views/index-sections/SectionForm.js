/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  FormGroup,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionForm() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <Form>
                  <FormGroup>
                    <Label for="examplePassword">Name</Label>
                    <Input
                      id="examplePassword"
                      name="Name"
                      placeholder="Name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Handle</Label>
                    <Input
                      id="examplePassword"
                      name="Name"
                      placeholder="Handle"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input id="exampleText" name="text" type="textarea" />
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </Card>
              <div className="col text-center"></div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionForm;
