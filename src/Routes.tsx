import { observer } from "mobx-react";
import React, { FC } from "react";
import { HashRouter, Route } from "react-router-dom";

import IndexView from "views/IndexView";
import RequestsView from "views/RequestsView";

const Routes: FC = () => {
  return (
    <HashRouter>
      <Route path="/" component={IndexView} exact/>
      <Route path="/requests" component={RequestsView} />
    </HashRouter>
  );
};

export default observer(Routes);
