import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { Header } from "components/common/Header";
import { RequestsChart } from "components/chartRequests/ChartRequests";
import { RequestsStore } from "components/chartRequests/ChartRequestsStore";

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background: #f5f5f5;
`;

const ClosedRequestsView: FC = observer(() => {
  const store: RequestsStore = new RequestsStore("closed");
  const { load } = store;

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Page>
      <Header />
      <RequestsChart store={store} />
    </Page>
  );
});

export default ClosedRequestsView;
