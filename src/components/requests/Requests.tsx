import React, { FC } from "react";
import styled from "styled-components";
import { Table, Space, Dropdown, Menu, Button } from "antd";
import { observer } from "mobx-react";

import { IRequest, RequestsStore } from "components/requests/RequestsStore";
import { RequestsFilters } from "components/requests/RequestFilters";
import { RequestEditModal } from "components/requests/RequestEditModal";
import { toJS } from "mobx";
import moment from "moment";

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
  const { isLoading, requests, openModal } = store;

  const columns = [
    {
      title: "ID обращения",
      dataIndex: "id",
      width: "15%",
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
      render: (status: string) =>
        status === "created" ? "Новое" : "Завершено",
    },
    {
      title: "Дата создания",
      dataIndex: "createdAt",
      width: "16%",
      render: (data: any) =>
        moment(data.seconds * 1000).format("MMM DD YYYY HH:mm:ss"),
    },
    {
      title: "Дата закрытия",
      dataIndex: "closedAt",
      width: "16%",
      render: (data: any) =>
        data && moment(data.seconds * 1000).format("MMM DD YYYY HH:mm:ss"),
    },
    {
      key: "actions",
      width: "10%",
      ellipsis: true,
      render: (_: any, record: IRequest) => (
        <Dropdown
          overlay={
            <Menu
              onClick={({ domEvent }) => {
                domEvent.stopPropagation();
              }}
            >
              <Menu.Item onClick={() => openModal(record.id)}>
                Редактировать
              </Menu.Item>
            </Menu>
          }
          placement="bottomLeft"
        >
          <Button type="text">...</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <CenteredContainer>
      <RequestsFilters store={store} />
      <RequestEditModal store={store} />
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
