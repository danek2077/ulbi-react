import { Button, Input, Modal, Form,  Calendar } from "antd";
import styles from "./UserEventStyles.module.scss";
import { Select } from "antd";
import { formAntdHook } from "./addUserHook";
import { UsersData } from "../../../../../../redux-store/slices/firstSlice/types/TypesFirstSlice";

type OptionsType = { value: string | number; label: string | number };

const AddUserEvent = ({ users }: { users: UsersData[] }) => {
  const [form] = Form.useForm();
  const { isModalOpen, showModal, handleOk, handleCancel, onSelect } =
    formAntdHook(form);
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
          add user event
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
            <Form.Item>
              <Calendar fullscreen={false} onSelect={onSelect} />
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
