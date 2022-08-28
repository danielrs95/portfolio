import {
  CloseOutlined,
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import stylesFixedHeader from "../styles/FixedHeader.module.css";

const { Header } = Layout;

const menuItems = [
  { label: <a href="#Home">Home</a>, key: "Home", icon: <HomeOutlined /> },
  { label: <a href="#About">About</a>, key: "About", icon: <UserOutlined /> },
  { label: <a href="#Work">Work</a>, key: "Work", icon: <CodeOutlined /> },
  {
    label: (
      <a
        href="https://www.linkedin.com/in/dramirezs95/?locale=en_US"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    ),
    key: "LinkedIn",
    icon: <LinkedinOutlined />,
  },
  {
    label: (
      <a href="https://github.com/danielrs95" target="_blank" rel="noreferrer">
        GitHub
      </a>
    ),
    key: "GitHub",
    icon: <GithubOutlined />,
  },
];

const FixedHeader: React.FC = () => (
  <Header className={stylesFixedHeader.layout}>
    <Row align="middle" justify="center">
      <Col xs={20} className={stylesFixedHeader.headerContainer}>
        <div>Daniel</div>
        <Menu
          overflowedIndicator={<MenuOutlined />}
          items={menuItems}
          mode="horizontal"
        />
      </Col>
    </Row>
  </Header>
);

export default FixedHeader;
