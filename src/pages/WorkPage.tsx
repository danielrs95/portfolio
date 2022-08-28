import React from "react";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Col, List, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import stylesSections from "../styles/Home.module.css";
import projectsData from "../utils/Work";

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
            }}
            dataSource={projectsData}
            style={{ marginTop: "2rem" }}
            renderItem={(item) => (
              <List.Item>
                <Card
                  cover={<img alt={item.title} src={item.img} />}
                  actions={[
                    <GlobalOutlined key="web" />,
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
