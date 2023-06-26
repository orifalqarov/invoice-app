import { Form, Input, Row, Typography, Button } from "antd";
const { Title } = Typography;
import { hoc } from "../../utils";
import { useLoginProps } from "./login.props";
export const Login = hoc(
  useLoginProps,
  ({ onLogin, emailRef, passwordRef }) => {
    return (
      <Row
        style={{ height: "100%", flexDirection: "column", marginTop: "100px" }}
        align={"middle"}
        justify={"center"}
      >
        <Title level={2}>Login</Title>
        <Form layout="vertical" style={{ width: "300px" }} onFinish={onLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please Input text",
              },
            ]}
          >
            <Input type="email" placeholder="Email" ref={emailRef} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please Input text",
              },
            ]}
          >
            <Input type="password" placeholder="Password" ref={passwordRef} />
          </Form.Item>
          <Button htmlType="submit">Login</Button>
        </Form>
      </Row>
    );
  }
);
