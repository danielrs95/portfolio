import {
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import stylesFixedHeader from "../styles/FixedHeader.module.css";

const { Header } = Layout;

const FixedHeader: React.FC = () => (
  <Layout className={stylesFixedHeader.layout}>
    <Header className={stylesFixedHeader.header}>
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
      <LinkedinOutlined className={stylesFixedHeader.socialIcons} />
      <GithubOutlined className={stylesFixedHeader.socialIcons} />
    </Header>
  </Layout>
);

export default FixedHeader;
