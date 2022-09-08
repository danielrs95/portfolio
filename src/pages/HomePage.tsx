import { Col, Row } from "antd";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import Particles from "react-particles";
import HomeStyles from "../styles/Home.module.css";
import LandingParticles from "../components/LandingParticles";

const HomePage = () => {
  return (
    <div className={`section ${HomeStyles.homeBackground}`}>
      <Row align="middle" justify="center">
        <Col
          xs={20}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                "I love learning",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              wrapperClassName: HomeStyles.homeSubtitle,
              cursorClassName: HomeStyles.homeSubtitle,
            }}
          />
          <div>
            <LinkedinFilled
              className={HomeStyles.socialIcons}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dramirezs95/?locale=en_US"
                )
              }
            />
            <GithubOutlined
              className={HomeStyles.socialIcons}
              onClick={() => window.open("https://github.com/danielrs95")}
            />
          </div>
        </Col>
      </Row>
      <LandingParticles id="1" />
    </div>
  );
};

export default HomePage;
