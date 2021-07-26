import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Header } = Layout;

const HeaderWrapper = styled.div`
  header {
    background-color: #fff;
    color: #000;
  }

  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3) !important;
    color: #fff !important;
    cursor: pointer;
    font-weight: bold;
    font-size: large;
  }

  .logo h1 {
    &:hover {
      color: #1890ff;
      transition: border-color 0.3s, background 0.3s;
    }
  }
`;

const Logo = styled.div.attrs({
  className: "flex justify-center items-center",
})``;

const HeaderMenu = () => {
  return (
    <HeaderWrapper>
      <Header>
        <div className="logo flex justify-center items-center">
          <h1>Example.io </h1>
        </div>

        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="trading">Trading</Menu.Item>
          <Menu.Item key="news">News</Menu.Item>
        </Menu>
      </Header>
    </HeaderWrapper>
  );
};

export default HeaderMenu;
