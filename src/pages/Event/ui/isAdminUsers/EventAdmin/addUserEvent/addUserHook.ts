import { FormInstance, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../../../redux-store/slices/firstSlice/firstSlice";
export type addUserObj = {
  user_selected: string;
  day_selected: number;
  task_wrote: string;
};
export const formAntdHook = (form: FormInstance<any>) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [day, setDay] = React.useState<any | number>();
  const [task, setTask] = React.useState("");
  const [user, setUser] = React.useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();

      const obj: addUserObj = {
        day_selected: Number(day),
        task_wrote: task,
        user_selected: user,
      };
      dispatch(addUser(obj));
      setIsModalOpen(false);
      message.success("ПЕРЕМОГА");
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value: string) => {
    setUser(value);
  };
  const selectedDay = (value: string) => {
    setDay(value);
  };
  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  return {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    onChange,
    selectedDay,
    handleInputTask,
  };
};
