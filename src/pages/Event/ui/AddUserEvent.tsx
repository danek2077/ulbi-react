import React from "react";
import { Button, Modal } from "antd";
import styles from "./UserEventStyles.module.scss";
import { Select } from "antd";
const AddUserEvent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <div className={styles.forCenter}>
      <div>
        <Button type="primary" onClick={showModal}>
          user event editor
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          okText={'Add'}
          onCancel={handleCancel}
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default AddUserEvent;
