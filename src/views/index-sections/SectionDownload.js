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
import fresh from "assets/img/FreshenUp.png";
import "assets/css/sponsor.css";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <a class="sponsor" href="https://www.freshenuphydration.com/" _blank>
            <img src={fresh} alt="Freshen Up" />
          </a>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
