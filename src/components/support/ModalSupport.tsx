import React, { FC, useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { observer } from "mobx-react";

import { SupportStore } from "components/support/SupportStore";

interface IProps {
  store: SupportStore;
}

export const ModalSupport: FC<IProps> = observer(({ store }) => {
  const {
    isOpenedModal,
    isValid,
    isLoading,
    onSubmit,
    closeModal,
    setIsValid,
  } = store;
  const [form] = Form.useForm();

  const onChangeForm = () => {
    form
      .validateFields()
      .then(() => setIsValid(true))
      .catch(() => setIsValid(false));
  };

  const onCancel = () => {
    form.resetFields();

    closeModal();
  };

  const onOk = () => {
    const data = form.getFieldsValue();

    onSubmit(data);
  };

  useEffect(() => {
    if (isOpenedModal) {
      form.resetFields();
    }
  }, [isOpenedModal]);

  return (
    <Modal
      title="Создание обращение в службу поддержки"
      visible={isOpenedModal}
      onOk={onOk}
      confirmLoading={isLoading}
      okButtonProps={{
        disabled: !isValid,
      }}
      onCancel={onCancel}
    >
      <Form
        name="basic"
        form={form}
        layout="vertical"
        style={{
          width: "100%",
        }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <Input onChange={onChangeForm} />
        </Form.Item>

        <Form.Item
          label="Номер телефона"
          name="phone"
          rules={[{ required: true, message: "Введите номер телефона" }]}
        >
          <Input.Password onChange={onChangeForm} />
        </Form.Item>

        <Form.Item
          label="Текст обращения"
          name="text"
          rules={[{ required: true, message: "Введите ваше обращение" }]}
        >
          <Input.TextArea onChange={onChangeForm} />
        </Form.Item>
      </Form>
    </Modal>
  );
});
