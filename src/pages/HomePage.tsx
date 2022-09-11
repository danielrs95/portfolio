import { Col, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import HomeStyles from "../styles/Home.module.css";
import LandingParticles from "../components/LandingParticles";

const HomePage = () => {
  const [strings, setStrings] = useState<string[]>([
    "Full Stack Developer",
    "Discipline beats talent",
  ]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((actualData) => {
        setStrings((prevState) => [
          ...prevState,
          actualData[Math.floor(Math.random() * 100)].text,
        ]);
        setStrings((prevState) => [
          ...prevState,
          actualData[Math.floor(Math.random() * 100)].text,
        ]);
        setStrings((prevState) => [
          ...prevState,
          actualData[Math.floor(Math.random() * 100)].text,
        ]);
      });
  }, []);

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
              strings,
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              wrapperClassName: HomeStyles.homeSubtitle,
              cursorClassName: HomeStyles.homeSubtitle,
            }}
          />
          <div style={{ zIndex: 1 }}>
            <Tooltip title="Check my LinkedIn" placement="bottom">
              <LinkedinFilled
                className={HomeStyles.socialIcons}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dramirezs95/?locale=en_US"
                  )
                }
              />
            </Tooltip>
            <Tooltip title="Check my Github" placement="bottom">
              <GithubOutlined
                className={HomeStyles.socialIcons}
                onClick={() => window.open("https://github.com/danielrs95")}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>
      <LandingParticles />
    </div>
  );
};

export default HomePage;
