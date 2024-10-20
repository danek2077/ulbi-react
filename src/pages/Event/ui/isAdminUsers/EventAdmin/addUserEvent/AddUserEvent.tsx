import React from "react";
import { Button, Input, Modal, Form } from "antd";
import styles from "./UserEventStyles.module.scss";
import { Select } from "antd";
import { formAntdHook } from "./addUserHook";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux-store/store";
import { DaysArray } from "../EventAdmin";
type OptionsType = { value: string | number; label: string | number };
const AddUserEvent = ({ days }: { days: DaysArray }) => {
  const [form] = Form.useForm();
  const {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    onChange,
    selectedDay,
    handleInputTask,
  } = formAntdHook(form);
  const daysOptions: OptionsType[] = [];
  days.map(function (el: any) {
    let num = el.day;
    return daysOptions.push({ label: num, value: num });
  });
  const options: OptionsType[] = [];
  const users = useSelector((state: RootState) => state.firstSlice.users);
  users.map(function (el) {
    const key = Object.keys(el)[0];
    options.push({ value: key, label: key });
  });

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
              name="userSelect"
              rules={[{ required: true, message: "Please select a person!" }]}
            >
              <Select
                showSearch
                placeholder="Select a user"
                optionFilterProp="label"
                onChange={onChange}
                options={options}
                style={{ width: 150, marginBottom: 10 }}
              />
            </Form.Item>
            <Form.Item
              name="daySelect"
              rules={[{ required: true, message: "Please select a day!" }]}
            >
              <Select
                style={{ width: 150, marginBottom: 10 }}
                onChange={selectedDay}
                placeholder={"Select a day"}
                options={daysOptions}
              />
            </Form.Item>
            <Form.Item
              name="taskWrite"
              rules={[{ required: true, message: "Please write a task!" }]}
            >
              <Input
                placeholder="Write a task"
                onChange={(e) => handleInputTask(e)}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AddUserEvent;
