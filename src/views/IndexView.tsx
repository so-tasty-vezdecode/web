import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "components/common/Header";
import { SupportForm } from "components/support/Support";

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
`;

const IndexView: FC = () => {
  return (
    <Page>
      <Header />
      <SupportForm />
    </Page>
  );
};

export default IndexView;
