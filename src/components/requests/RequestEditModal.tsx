import React, { FC, useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { observer } from "mobx-react";

import { RequestsStore } from "components/requests/RequestsStore";

interface IProps {
  store: RequestsStore;
}

export const RequestEditModal: FC<IProps> = observer(({ store }) => {
  const {
    isOpenedModal,
    isLoading,
    changeRequestStatus,
    closeModal,
    currRequest,
  } = store;
  const [form] = Form.useForm();

  const onOk = () => {
    changeRequestStatus();
  };

  useEffect(() => {
    if (isOpenedModal) {
      form.resetFields();
    }
  }, [isOpenedModal]);

  return (
    <Modal
      title="Редактировать обращение"
      visible={isOpenedModal}
      onOk={onOk}
      okText={"Завершить обращение"}
      cancelText={"Отмена"}
      okButtonProps={{
        disabled: currRequest?.status === "closed",
      }}
      confirmLoading={isLoading}
      onCancel={closeModal}
    >
      <Form
        name="basic"
        form={form}
        layout="vertical"
        style={{
          width: "100%",
        }}
        initialValues={{
          name: currRequest?.name || "",
          phone: currRequest?.phone || "",
          text: currRequest?.text || "",
        }}
      >
        <Form.Item label="Имя" name="name">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Номер телефона" name="phone">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Текст обращения" name="text">
          <Input.TextArea disabled />
        </Form.Item>
      </Form>
    </Modal>
  );
});
