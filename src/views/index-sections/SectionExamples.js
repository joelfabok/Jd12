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
import "assets/css/stream.css";
import Iframe from "react-iframe";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="ml-auto mr-auto text-center">
            <ReactPlayer url="https://www.twitch.tv/jdauntless12" controls />
            <Iframe
              id="twitch-chat-embed"
              src="https://www.twitch.tv/embed/twitchdev/chat?parent=dev.twitch.tv"
              height="359"
              width="350"
            />
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
