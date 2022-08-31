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
    // {
    //   label: (
    //     <a
    //       href="https://www.linkedin.com/in/dramirezs95/?locale=en_US"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       LinkedIn
    //     </a>
    //   ),
    //   key: "LinkedIn",
    //   icon: <LinkedinOutlined />,
    // },
    // {
    //   label: (
    //     <a
    //       href="https://github.com/danielrs95"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       GitHub
    //     </a>
    //   ),
    //   key: "GitHub",
    //   icon: <GithubOutlined />,
    // },
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
        <h1 style={{ fontSize: "1.8rem", textAlign: "center" }}>DnRz</h1>
        <Menu
          selectedKeys={[current]}
          overflowedIndicator={<MenuOutlined />}
          items={menuItems}
          mode="inline"
        />
        <div>
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
      </div>
    </Sider>
  );
};

export default FixedHeader;
