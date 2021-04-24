import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { enableLogging } from "mobx-logger";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";

import { routerStore } from "stores/RouterStore";
import { GlobalStyle } from "components/common/globalStyle";
import Routes from "Routes";

import "antd/dist/antd.css";

// MobX
enableLogging(undefined);

// history
const browserHistory = createBrowserHistory({ basename: "/" });
const history = syncHistoryWithStore(browserHistory, routerStore);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
