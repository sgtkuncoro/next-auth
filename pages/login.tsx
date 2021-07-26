import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  // Avatar,
  Typography,
  // message,
  Layout,
} from "antd";
// import { UserOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {};

  return (
    <Layout className="h-screen overflow-x-auto">
      <Layout className="flex flex-col h-screen">
        <div className="px-2 py-4 mt-auto mb-auto h-auto">
          <Card className="max-w-md m-auto rounded-md shadow-sm">
            <div className="max-w-md m-auto mb-8 mt-5">
              {/* <Avatar
                size={64}
                icon={<UserOutlined />}
                className="flex justify-center items-center m-auto"
              /> */}
              <Typography.Title className="mt-5" level={5}>
                Login to Example.io
              </Typography.Title>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              form={form}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  className="rounded-md"
                  placeholder="Email"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
                className="mt-3"
              >
                <Input.Password
                  className="rounded-md"
                  type="password"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button mr-3 rounded-md"
                  size="large"
                  block
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Layout>
    </Layout>
  );
};

export default LoginForm;
