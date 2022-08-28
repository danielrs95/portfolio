import { Col, Row } from "antd";
import React from "react";
import stylesSections from "../styles/Sections.module.css";

const AboutSection = () => {
  return (
    <div className={`section ${stylesSections.landing}`}>
      <Row justify="center" align="middle">
        <Col span={10}>
          <h3 className={stylesSections.landingSubtitle}>About me</h3>
          <p className={stylesSections.aboutText}>
            Hello! I am a web developer focused on Javascript with knowledge on
            Ruby. Currently living in Medellin, Colombia. Passionate about
            learning, programming and working out. I am curious about tech in
            general, currently learning about Rust & Elixir
          </p>
        </Col>
      </Row>
      <div className={stylesSections.area}>
        <ul className={stylesSections.circles}>
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
