import React, { FC } from "react";
import { Form, Card, Col, Typography, Select, Row } from "antd";
import { observer } from "mobx-react";

import { RequestsStore } from "components/chartRequests/ChartRequestsStore";

interface IProps {
  store: RequestsStore;
}

const { Option } = Select;

export const RequestsHeader: FC<IProps> = observer(({ store }) => {
  const { onChangeGrouping, groupBy } = store;
  const [form] = Form.useForm();

  return (
    <Card title={"Диаграмма заявок"}>
      <Form form={form}>
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item name="status">
              <Typography.Text>Группировать по</Typography.Text>
              <Select
                value={groupBy}
                onChange={onChangeGrouping}
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <Option value={"seconds"} key={"seconds"}>
                  Секунда (данные за последние 30 минут)
                </Option>
                <Option value={"minutes"} key={"minutes"}>
                  Минута (данные за последние сутки)
                </Option>
                <Option value={"hours"} key={"hours"}>
                  Час
                </Option>
                <Option value={"days"} key={"days"}>
                  Сутки
                </Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});
