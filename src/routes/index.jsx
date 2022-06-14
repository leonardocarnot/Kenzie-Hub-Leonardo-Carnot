import { Switch, Route } from "react-router";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <PageLogin />
      </Route>
      <Route exact path="/register">
        <PageRegister />
      </Route>
    </Switch>
  );
}

export default Routes;