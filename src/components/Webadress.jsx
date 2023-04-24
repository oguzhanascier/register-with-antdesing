import { SettingOutlined } from "@ant-design/icons";
import { Cascader, Input, Select, Space, Form } from "antd";

const Webadress = () => {
  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  return (
    <Space direction="vertical">
      <Form.Item name="mysite" label="my website">
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
        />
      </Form.Item>
    </Space>
  );
};
export { Webadress };
