import { Col, Row } from "antd";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import HomeStyles from "../styles/Home.module.css";
import LandingParticles from "../components/LandingParticles";

const HomePage = () => {
  return (
    <div className={`section ${HomeStyles.homeBackground}`}>
      <Row align="middle" justify="center">
        <Col xs={20} style={{ textAlign: "center" }}>
          <h1 className={HomeStyles.homeTitle}>
            Hi! I'm Daniel Ramirez Salazar{" "}
            <span
              className={HomeStyles.waveEmoji}
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <TypewriterComponent
            options={{
              strings: [
                "Full Stack Developer",
                "I like programming",
                "I love learning and studying",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: "<",
              delay: 100,
              wrapperClassName: HomeStyles.homeSubtitle,
              cursorClassName: HomeStyles.homeSubtitle,
            }}
          />
        </Col>
      </Row>
      <LandingParticles id="1" />
    </div>
  );
};

export default HomePage;
