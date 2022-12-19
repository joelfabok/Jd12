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
import "assets/css/social.css";
import tiktok from "assets/img/social/tiktok-icon.png";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

// core components

function SectionSocial() {
  return (
    <>
      <div className="section section-navigation">
        <Container className="tim-container">
          <div className="title">
            <ul className="social">
              <li>
                <a href="https://www.youtube.com/@jdauntless12" target="_blank">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                  <span> - YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/jdauntless12" target="_blank">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <span> - Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@jdauntless12" target="_blank">
                  <img src={tiktok} alt="Logo" className="tiktok" />
                  <span> - Tiktok</span>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSocial;
