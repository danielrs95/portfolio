import { Col, Row } from "antd";
import React from "react";
import AboutStyles from "../styles/About.module.css";

const AboutSection = () => {
  return (
    <div className={`section ${AboutStyles.aboutBg}`}>
      <Row justify="center" align="middle">
        <Col xs={20}>
          <h3 className={AboutStyles.aboutSubtitle}>About me</h3>
          <p className={AboutStyles.aboutText}>
            Hello! I am a web developer focused on Javascript with knowledge on
            Ruby. Currently living in Medellin, Colombia. Passionate about
            learning, programming and working out. I am curious about tech in
            general, currently learning about Rust & Elixir
          </p>
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
