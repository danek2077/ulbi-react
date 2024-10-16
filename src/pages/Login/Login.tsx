import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import styles from "./styles/LoginStyle.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authTrue } from "../../redux-store/slices/firstSlice/firstSlice";
import { useNavigate } from "react-router-dom";
type FieldType = {
  username: string;
  password: string;
};
type resBackDataType = {
  username: string;
  password: string;
  id: string;
  admin_access: boolean;
};
type resBackType = {
  data: resBackDataType[];
};
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res: resBackType = await axios.get("http://localhost:3007/data");
      const user = res.data.find(
        (el) =>
          el.username === values.username && el.password === values.password
      );
      if (user) {
        message.success("ПЕРЕМОГА");
        dispatch(
          authTrue({ username: user.username, access: user.admin_access })
        );
        navigate("/event");
      } else {
        message.error("USER NOT FOUND");
      }
    } catch (e) {
      message.error("backend fail");
    }
  };

  return (
    <div className={styles.middle}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Enter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
