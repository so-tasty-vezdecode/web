import React, { FC } from "react";
import styled from "styled-components";
import { Table, Space } from "antd";
import { observer } from "mobx-react";

import { RequestsStore } from "components/requests/RequestsStore";
import { RequestsFilters } from "components/requests/RequestFilters";
import { toJS } from "mobx";

const CenteredContainer = styled.div`
  position: relative;
  width: 1200px;
  padding: 70px 0px;
  left: 50%;
  transform: translateX(-50%);
`;

interface IProps {
  store: RequestsStore;
}

export const RequestsTable: FC<IProps> = observer(({ store }) => {
  const { isLoading, requests } = store;

  const columns = [
    {
      title: "ID обращения",
      dataIndex: "id",
      width: "20%",
    },
    {
      title: "Пользователь",
      dataIndex: "name",
      ellipsis: true,
    },
    {
      title: "Номер телефона",
      dataIndex: "phone",
      width: "15%",
    },
    {
      title: "Статус",
      dataIndex: "status",
      width: "15%",
    },
    {
      title: "Дата создания обращения",
      dataIndex: "createdAt",
      width: "25%",
      render: (data: any) => String(new Date(data.seconds * 1000)),
    },
  ];

  return (
    <CenteredContainer>
      <RequestsFilters store={store} />
      <Space>
        <Table
          loading={isLoading}
          dataSource={toJS(requests)}
          columns={columns}
          rowKey="id"
          pagination={{
            showSizeChanger: true,
          }}
        />
      </Space>
    </CenteredContainer>
  );
});
