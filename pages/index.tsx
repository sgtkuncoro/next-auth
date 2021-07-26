import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

import ProtectedLayout from "src/components/Layout/MainLayout";

const Index = () => (
  <ProtectedLayout>
    <Content className="mx-auto">
      <Breadcrumb className="m-4">
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="m-4">Home Content</Layout>
    </Content>
  </ProtectedLayout>
);

export default Index;
