import { Col, Row } from "antd";
import React from "react";
import HomeStyles from "../styles/Home.module.css";
import LandingParticles from "../components/LandingParticles";

const HomePage = () => {
  return (
    <div className={`section ${HomeStyles.homeBackground}`}>
      <Row align="middle" justify="center">
        <Col xs={20}>
          <h1 className={HomeStyles.homeTitle}>Daniel Ramirez Salazar</h1>
          <h2 className={HomeStyles.homeSubtitle}>Full Stack Developer</h2>
        </Col>
      </Row>
      <LandingParticles />
    </div>
  );
};

export default HomePage;
