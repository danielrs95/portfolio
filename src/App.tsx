import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import FixedHeader from "./components/FixedHeader";
import AppPages from "./pages/AppPages";

function App() {
  return (
    <Layout>
      <FixedHeader />
      <Layout>
        <Content>
          <AppPages />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
