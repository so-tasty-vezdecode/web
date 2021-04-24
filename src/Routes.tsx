import { observer } from "mobx-react";
import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import IndexView from "views/IndexView";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={IndexView} />
    </Switch>
  );
};

export default observer(Routes);
