import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, List, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import stylesSections from "../styles/Home.module.css";

const WorkPage = () => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ];
  return (
    <div className={`section ${stylesSections.landing}`}>
      <Row justify="center" align="middle">
        <Col span={20}>
          <List
            grid={{
              // gutter: 16,
              xs: 1,
              lg: 2,
              // xl: 6,
              // xxl: 3,
            }}
            dataSource={data}
            style={{ marginTop: "2rem" }}
            renderItem={(item) => (
              <List.Item>
                {/* <Card title={item.title}>Card content</Card> */}
                <Card
                  // style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                    description="This is the description"
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
