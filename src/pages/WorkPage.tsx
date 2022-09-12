import React from "react";
import { Col, Row } from "antd";
import stylesSections from "../styles/Home.module.css";
import projectsData from "../utils/Work";
import CardExperience from "../components/CardExperience";

const WorkPage = () => {
  return (
    <div className={`section ${stylesSections.homeBackground}`}>
      <Row
        align="middle"
        justify="center"
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 30, sm: 16, md: 24, lg: 32 },
        ]}
      >
        {projectsData.map((project) => (
          <Col xs={20} lg={12} xxl={8}>
            <CardExperience
              titleProject={project.title}
              techUsed={project.techUsed}
              image={project.img}
              webProject={project?.webProject}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WorkPage;
