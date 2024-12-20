import { FormInstance, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../../../redux-store/slices/firstSlice/firstSlice";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
export type addUserObj = {
  username: string;
  date: string;
  event: string;
};

export const formAntdHook = (form: FormInstance<any>) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [date, setDate] = React.useState(dayjs().format("YYYY-MM-DD"));
  const onSelect = (newValue: Dayjs) => {
    setDate(newValue.format("YYYY-MM-DD"));
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      await form.validateFields();
      const values = await form.getFieldsValue();
      dispatch(addUser({ ...values, date: date }));
      setIsModalOpen(false);
      message.success("ПЕРЕМОГА");
      form.resetFields();
    } catch (e) {
      console.error(e);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    onSelect,
  };
};
