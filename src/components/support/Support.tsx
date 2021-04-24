import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { observer } from "mobx-react";

import { ModalSupport } from "components/support/ModalSupport";
import { SupportStore } from "components/support/SupportStore";

const CenteredContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SupportForm: FC = observer(() => {
  const store: SupportStore = new SupportStore();
  const { openModal } = store;
  return (
    <CenteredContainer>
      <Button onClick={openModal}>
        Отправить обращение в службу поддержки
      </Button>
      <ModalSupport store={store} />
    </CenteredContainer>
  );
});
