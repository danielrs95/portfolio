import {
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import stylesFixedHeader from "../styles/FixedHeader.module.css";

const { Header } = Layout;

const FixedHeader: React.FC = () => (
  <Header className={stylesFixedHeader.layout}>
    <Row align="middle" justify="center">
      <Col xs={20} className={stylesFixedHeader.headerContainer}>
        <div>Daniel</div>
        <div style={{ display: "flex" }}>
          <Menu
            mode="horizontal"
            className={stylesFixedHeader.menu}
            activeKey={undefined}
          >
            <Menu.Item icon={<HomeOutlined />}>
              <a href="#Home">Home</a>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />}>
              <a href="#About">About</a>
            </Menu.Item>
            <Menu.Item icon={<CodeOutlined />}>
              <a href="#Work">Work</a>
            </Menu.Item>
          </Menu>
          <LinkedinOutlined
            className={stylesFixedHeader.socialIcons}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dramirezs95/?locale=en_US"
              )
            }
          />
          <GithubOutlined
            className={stylesFixedHeader.socialIcons}
            onClick={() => window.open("https://github.com/danielrs95")}
          />
        </div>
      </Col>
    </Row>
  </Header>
);

export default FixedHeader;
