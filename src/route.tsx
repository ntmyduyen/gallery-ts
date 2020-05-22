import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Search } from "./pages/Search";
import { Favourite } from "./pages/Favourite";

export const Routes: React.SFC<{}> = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/favourite" component={Favourite} />
      </Switch>
    </div>
  );
};
