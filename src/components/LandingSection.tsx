import { Col, Row } from "antd";
import React from "react";
import stylesSections from "../styles/Sections.module.css";
import LandingParticles from "./LandingParticles";

const LandingSection = () => {
  return (
    <div className={`section ${stylesSections.landing}`}>
      <Row align="middle" justify="center">
        <Col xs={20}>
          <h1 className={stylesSections.landingTitle}>
            Daniel Ramirez Salazar
          </h1>
          <h2 className={stylesSections.landingSubtitle}>
            Full Stack Developer
          </h2>
        </Col>
      </Row>
      <LandingParticles />
    </div>
  );
};

export default LandingSection;
