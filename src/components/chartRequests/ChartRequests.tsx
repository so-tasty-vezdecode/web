import React, { FC } from "react";
import styled from "styled-components";
import { Space } from "antd";
import { observer } from "mobx-react";
import { Line } from "@ant-design/charts";
import { toJS } from "mobx";

import { RequestsStore } from "components/chartRequests/ChartRequestsStore";
import { RequestsHeader } from "components/chartRequests/ChartRequestsHeader";

const CenteredContainer = styled.div`
  position: relative;
  width: 1200px;
  padding: 70px 0px;
  left: 50%;
  transform: translateX(-50%);
`;

const Container = styled.div`
  background: #fff;
  padding: 20px;
  margin-top: 20px;
`;

interface IProps {
  store: RequestsStore;
}

export const RequestsChart: FC<IProps> = observer(({ store }) => {
  const { isLoading, formattedRequests } = store;

  return (
    <CenteredContainer>
      <RequestsHeader store={store} />
      <Space>
        <Container>
          <Line
            data={toJS(formattedRequests)}
            xField={"date"}
            yField={"value"}
            slider={{
              start: 0,
              end: 1,
            }}
            width={1160}
            loading={isLoading}
          />
        </Container>
      </Space>
    </CenteredContainer>
  );
});
