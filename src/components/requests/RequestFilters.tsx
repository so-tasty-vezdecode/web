import React, { FC } from "react";
import {
  Form,
  Card,
  Button,
  Col,
  Typography,
  Select,
  DatePicker,
  Row,
  Input,
} from "antd";
import { observer } from "mobx-react";

import { RequestsStore } from "components/requests/RequestsStore";

interface IProps {
  store: RequestsStore;
}

const { RangePicker } = DatePicker;
const { Option } = Select;

export const RequestsFilters: FC<IProps> = observer(({ store }) => {
  const {
    clearFilters,
    onChangeStatusFilter,
    onChangeSearchFilter,
    onChangeCreatedAtFilter,
  } = store;
  const [form] = Form.useForm();

  const onClearFilters = () => {
    form.resetFields();

    clearFilters();
  };

  return (
    <Card
      title={"Фильтры"}
      extra={
        <Button type="link" onClick={onClearFilters}>
          Очистить фильтры
        </Button>
      }
    >
      <Form form={form}>
        <Row gutter={32}>
          <Col span={8}>
            <Typography.Text>Поиск по ID и номеру</Typography.Text>

            <Input.Search
              style={{
                width: "100%",
                marginTop: 10,
              }}
              onSearch={onChangeSearchFilter}
            />
          </Col>
          <Col span={8}>
            <Typography.Text>Дата создания</Typography.Text>
            <RangePicker
              showTime
              onChange={onChangeCreatedAtFilter}
              style={{
                width: "100%",
                marginTop: 10,
              }}
            />
          </Col>
          <Col span={8}>
            <Form.Item
              name="status"
              rules={[{ required: true, message: "Введите ваше имя" }]}
            >
              <Typography.Text>Статус</Typography.Text>
              <Select
                onChange={onChangeStatusFilter}
                placeholder={"Статус заявки"}
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <Option value={"created"} key={"created"}>
                  Created
                </Option>
                <Option value={"closed"} key={"closed"}>
                  Closed
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});
