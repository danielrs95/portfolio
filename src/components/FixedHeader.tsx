import {
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import stylesFixedHeader from "../styles/FixedHeader.module.css";

const { Header } = Layout;

const menuItems = [
  { label: "About", key: "About", icon: <HomeOutlined /> },
  { label: "Work", key: "Work", icon: <CodeOutlined /> },
  { label: "Contact", key: "Contact", icon: <MailOutlined /> },
];

const FixedHeader: React.FC = () => (
  <Layout className={stylesFixedHeader.layout}>
    <Header className={stylesFixedHeader.header}>
      <Menu
        // theme="dark"
        mode="horizontal"
        items={menuItems}
        className={stylesFixedHeader.menu}
      />
      <LinkedinOutlined className={stylesFixedHeader.socialIcons} />
      <GithubOutlined className={stylesFixedHeader.socialIcons} />
    </Header>
  </Layout>
);

export default FixedHeader;
