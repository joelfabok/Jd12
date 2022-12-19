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
import "assets/css/cards.scss";
import osrs from "assets/img/osrs.jpg";
import "assets/css/games.css";
import JC from "assets/img/JustC.png";
import Val from "assets/img/Valor.png";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionGames() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="games text-center">
            {/* Start Of First Game */}
            <div class="game">
              <div class="rank">1</div>
              <div class="front">
                <img src={osrs} alt="game" />
                <h3 class="name">Old School RuneScape</h3>
                <div class="status">
                  <p class="viewers">132.5k</p>
                  <div class="streamers">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="back">
                <div class="streaming-info">
                  <p class="game-stat">
                    174.4k <span>Watching</span>
                  </p>
                  <p class="game-stat">
                    3,172<span>Streams</span>
                  </p>
                </div>
                <button class="btn">
                  <a href="https://www.twitch.tv/directory/game/Old%20School%20RuneScape">
                    See more streams
                  </a>
                </button>
              </div>
              <div class="backgroundWrapper"></div>
            </div>

            {/* End of first game on the list */}

            {/* Start Of Second Game */}
            <div class="game">
              <div class="rank">2</div>
              <div class="front">
                <img src={JC} alt="game" />
                <h3 class="name">Just Chatting</h3>
                <div class="status">
                  <p class="viewers">132.5k</p>
                  <div class="streamers">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="back">
                <div class="streaming-info">
                  <p class="game-stat">
                    174.4k <span>Watching</span>
                  </p>
                  <p class="game-stat">
                    3,172<span>Streams</span>
                  </p>
                </div>
                <button class="btn">
                  <a href="https://www.twitch.tv/directory/game/Just%20Chatting">
                    See more streams
                  </a>
                </button>
              </div>
              <div class="backgroundWrapper"></div>
            </div>

            {/* End of second game on the list */}

            {/* Start Of Third Game */}
            <div class="game">
              <div class="rank">3</div>
              <div class="front">
                <img src={Val} alt="game" />
                <h3 class="name">Valorant</h3>
                <div class="status">
                  <p class="viewers">132.5k</p>
                  <div class="streamers">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="back">
                <div class="streaming-info">
                  <p class="game-stat">
                    174.4k <span>Watching</span>
                  </p>
                  <p class="game-stat">
                    3,172<span>Streams</span>
                  </p>
                </div>
                <button class="btn">
                  <a href="https://www.twitch.tv/directory/game/VALORANT">
                    See more streams
                  </a>
                </button>
              </div>
              <div class="backgroundWrapper"></div>
            </div>

            {/* End Of Third Game On List */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionGames;
