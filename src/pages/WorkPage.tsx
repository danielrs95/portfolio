import React from "react";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Col, List, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import stylesSections from "../styles/Home.module.css";
import projectsData from "../utils/Work";
import AboutStyles from "../styles/About.module.css";

const { Paragraph } = Typography;

const WorkPage = () => {
  return (
    <div className={`section ${stylesSections.homeBackground}`}>
      <Row justify="center" align="middle">
        <Col span={15}>
          <List
            grid={{
              xs: 1,
              lg: 2,
              xl: 3,
              xxl: 3,
              gutter: 16,
            }}
            dataSource={projectsData}
            style={{ marginTop: "2rem" }}
            renderItem={(item) => (
              <List.Item>
                <Card
                  cover={
                    <img
                      width={300}
                      height={200}
                      alt={item.title}
                      src={item.img}
                      style={{ objectFit: "contain" }}
                    />
                  }
                  actions={[
                    item.webProject && (
                      <GlobalOutlined
                        key="web"
                        onClick={() => window.open(item.webProject)}
                      />
                    ),
                    <GithubOutlined
                      key="github"
                      onClick={() => window.open(item.repo)}
                    />,
                  ]}
                >
                  <Meta
                    title={item.title}
                    description={
                      <Paragraph
                        type="secondary"
                        ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                      >
                        {item.shortDescription}
                      </Paragraph>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WorkPage;
