import { observer } from "mobx-react";
import React, { FC } from "react";
import { HashRouter, Route } from "react-router-dom";

import IndexView from "views/IndexView";
import RequestsView from "views/RequestsView";
import OpenRequests from "views/OpenRequestCharts";
import ClosedRequests from "views/ClosedRequestCharts";

const Routes: FC = () => {
  return (
    <HashRouter>
      <Route path="/" component={IndexView} exact />
      <Route path="/requests" component={RequestsView} />
      <Route path="/open-requests" component={OpenRequests} />
      <Route path="/closed-requests" component={ClosedRequests} />
    </HashRouter>
    
  );
};

export default observer(Routes);
