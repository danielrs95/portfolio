import { Col, Row } from "antd";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import AboutStyles from "../styles/About.module.css";

const AboutSection = () => {
  return (
    <div className={`section ${AboutStyles.aboutBg}`}>
      <Row justify="center" align="middle">
        <Col xs={20}>
          <h3 className={AboutStyles.aboutSubtitle}>About me 🙋🗣️ </h3>
          <p className={AboutStyles.aboutText}>
            Hello! I am a full stack web developer curious about tech in
            general, lately with special interest in new innovation such as
            virtual reality and blockchain.
          </p>
          <p className={AboutStyles.aboutText}>
            Constantly working with JavaScript, ReactJS, NodeJS and some Java
          </p>
          <div style={{ display: "flex" }}>
            <p
              className={AboutStyles.aboutText}
              style={{ paddingRight: "5px" }}
            >
              📣 Passionate about
            </p>{" "}
            <TypewriterComponent
              options={{
                strings: ["programming", "learning", "working out"],
                autoStart: true,
                loop: true,
                wrapperClassName: AboutStyles.aboutText,
                cursorClassName: AboutStyles.aboutText,
              }}
            />
            <p className={AboutStyles.aboutText}>
              . I am curious about tech in general, currently learning Rust &
              Elixir
            </p>
          </div>
        </Col>
      </Row>
      <div className={AboutStyles.area}>
        <ul className={AboutStyles.circles}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
