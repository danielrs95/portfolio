import {
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Grid, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import stylesFixedHeader from "../styles/FixedHeader.module.css";
import logo from "../img/DanielRz.png";
import logoCollapsed from "../img/Symbol.png";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const FixedHeader: React.FC = () => {
  const { hash } = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState("");
  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  const screens = useBreakpoint();
  const { lg } = screens;

  const menuItems = [
    { label: <a href="#Home">Home</a>, key: "Home", icon: <HomeOutlined /> },
    { label: <a href="#About">About</a>, key: "About", icon: <UserOutlined /> },
    { label: <a href="#Work">Work</a>, key: "Work", icon: <CodeOutlined /> },
    {
      label: collapsed ? (
        "Expand"
      ) : (
        <div onClick={collapseHandler} aria-hidden="true">
          Collapse
        </div>
      ),
      key: collapsed ? "Expand" : "Collapse",
      icon: collapsed ? (
        <MenuUnfoldOutlined onClick={collapseHandler} />
      ) : (
        <MenuFoldOutlined onClick={collapseHandler} />
      ),
    },
  ];

  useEffect(() => {
    const newCurrent = hash.slice(1);
    setCurrent(newCurrent);
  }, [hash]);

  useEffect(() => {
    if (lg) setCollapsed(false);
  }, [lg]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: "white" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {collapsed ? (
          <img
            src={logoCollapsed}
            alt="logoCollapsed"
            style={{ width: "300px" }}
          />
        ) : (
          <img src={logo} alt="logo" style={{ width: "300px" }} />
        )}
        <Menu
          selectedKeys={[current]}
          overflowedIndicator={<MenuOutlined />}
          items={menuItems}
          mode="inline"
        />
        <div />
      </div>
    </Sider>
  );
};

export default FixedHeader;
