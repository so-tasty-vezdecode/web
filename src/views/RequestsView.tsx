import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { Header } from "components/common/Header";
import { RequestsTable } from "components/requests/Requests";
import { RequestsStore } from "components/requests/RequestsStore";

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background: #f5f5f5;
`;

const RequestsView: FC = observer(() => {
  const store: RequestsStore = new RequestsStore();
  const { load } = store;

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Page>
      <Header />
      <RequestsTable store={store} />
    </Page>
  );
});

export default RequestsView;
