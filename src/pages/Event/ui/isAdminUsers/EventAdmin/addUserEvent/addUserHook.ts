import { FormInstance, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../../../redux-store/slices/firstSlice/firstSlice";
export type addUserObj = {
  username: string;
  day: number;
  event: string;
};
export const formAntdHook = (form: FormInstance<any>) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      await form.validateFields();
      const values = await form.getFieldsValue();
      dispatch(addUser(values));
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
  };
};
