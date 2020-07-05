import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./components/homepage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}
