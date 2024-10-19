import React from "react";
import { Button, Input, Modal, Form } from "antd";
import styles from "./UserEventStyles.module.scss";
import { Select } from "antd";
import { formAntdHook } from "./isAdminUsers/model/addUserHook";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";
import { DaysArray } from "./isAdminUsers/EventAdmin";
type OptionsType = { value: string | number; label: string | number };
type FieldType = {
  username: string;
  password: string;
};
const AddUserEvent = ({ days }: { days: DaysArray }) => {
  const { isModalOpen, showModal, handleOk, handleCancel, onChange, onSearch } =
    formAntdHook();
  const daysOptions: OptionsType[] = [];
  days.map(function (el) {
    let num = el.day;
    return daysOptions.push({ label: num, value: num });
  });
  const options: OptionsType[] = [];
  const users = useSelector((state: RootState) => state.firstSlice.users);
  users.map(function (el) {
    const key = Object.keys(el)[0];
    options.push({ value: key, label: key });
  });
  const selectedDay = (value: string) => {
    console.log(`selected day ${value}`);
  };
  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`value ${e.target.value}`);
  };
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
          <Form>
            <Form.Item>
              
            </Form.Item>
          </Form>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={options}
            style={{ width: 150, marginBottom: 10 }}
          />

          <br />
          <Select
            style={{ width: 150, marginBottom: 10 }}
            onChange={selectedDay}
            placeholder={"Select a day"}
            options={daysOptions}
          />
          <br />
          <Input
            placeholder="Write a task"
            onChange={(e) => handleInputTask(e)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default AddUserEvent;
