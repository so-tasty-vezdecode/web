import React, { FC } from "react";
import styled from "styled-components";

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
      <SupportForm />
    </Page>
  );
};

export default IndexView;
