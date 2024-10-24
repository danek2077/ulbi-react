import { Button, Input, Modal, Form } from "antd";
import styles from "./UserEventStyles.module.scss";
import { Select } from "antd";
import { formAntdHook } from "./addUserHook";
import { UsersData } from "../../../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";
type OptionsType = { value: string | number; label: string | number };
const AddUserEvent = ({ users }: { users: UsersData[] }) => {
  const [form] = Form.useForm();
  const { isModalOpen, showModal, handleOk, handleCancel } = formAntdHook(form);
  const daysOptions: OptionsType[] = Array.from({ length: 7 }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }));
  const users_filtered = users.reduce((acc, cur) => {
    if (!acc.includes(cur.username)) {
      acc.push(cur.username);
    }
    return acc;
  }, [] as string[]);
  const options: OptionsType[] = Array.from(users_filtered, (el) => ({
    value: el,
    label: el,
  }));
  return (
    <div className={styles.forCenter}>
      <div>
        <Button type="primary" onClick={showModal}>
          user event editor
        </Button>
        <Modal
          title="User adder"
          open={isModalOpen}
          onOk={handleOk}
          okText={"Add"}
          onCancel={handleCancel}
        >
          <Form form={form}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please select a person!" }]}
            >
              <Select
                showSearch
                placeholder="Select a user"
                optionFilterProp="label"
                options={options}
                style={{ width: 150, marginBottom: 10 }}
              />
            </Form.Item>
            <Form.Item
              name="day"
              rules={[{ required: true, message: "Please select a day!" }]}
            >
              <Select
                style={{ width: 150, marginBottom: 10 }}
                placeholder={"Select a day"}
                options={daysOptions}
              />
            </Form.Item>
            <Form.Item
              name="event"
              rules={[{ required: true, message: "Please write a task!" }]}
            >
              <Input placeholder="Write a task" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AddUserEvent;
