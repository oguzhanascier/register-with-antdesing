import { Button, Checkbox, Form, Input,message  } from "antd";
import { GanderForm } from "./components/Ganderform.jsx";
import {Webadress } from "./components/Webadress.jsx";
import { Message } from "./components/Submitmessage.jsx";
import { Step } from "./components/Steps.jsx";
import { BugBox } from "./components/BoxBug.jsx";
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };




/* This code is using the `useMessage` hook from the `antd` library to create a message API and a
context holder. The `success` function is then defined to open a success message using the
`messageApi` object with a duration of 3 seconds. This is used to display a success message when the
form is submitted successfully. */
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Success!',
      duration: 3,
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      {...layout}
      form={form}
    >

      <Step/>
    <Message contextHolder={contextHolder}/>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <GanderForm form={form} />
        <Webadress/>
        <Button type="primary" htmlType="submit" onClick={success}>
          Submit
        </Button>
      </Form.Item>
      <BugBox/>
    </Form>
  );
};

export default App;
