import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  position: fixed;
  top: 0px;
  height: 40px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 1px 0px 0 rgba(175, 196, 208, 0.47);
  z-index: 1000;
`;

const StyledHeaderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1000px;
  margin: 10px auto 0px;
`;

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to="/">Создать обращение</Link>
        <Link to="/requests">Посмотреть все обращения</Link>
        <Link to="/open-requests">Диаграмма по открытым заявкам</Link>
        <Link to="/closed-requests">Диаграмма по закрытым заявкам</Link>
      </StyledHeaderContent>
    </StyledHeader>
  );
};
