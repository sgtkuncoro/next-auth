import { Layout, Breadcrumb, Empty } from "antd";
const { Content } = Layout;

import ProtectedLayout from "src/components/Layout/MainLayout";

// use this template to new page
const Index = () => (
  <ProtectedLayout>
    <Content className="mx-8">
      <Breadcrumb className="m-4">
        <Breadcrumb.Item>Whoops you're lost!</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="m-4">
        <Empty description="Thi is blank page" />
      </Layout>
    </Content>
  </ProtectedLayout>
);

export default Index;
