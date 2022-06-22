import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";

function Routes() {
  const [authenticated, setAuthenticated]= useState(false);

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token){
      return setAuthenticated(true);
    }
  }, [authenticated]);


  return (
    <Switch>
      <Route exact path="/">
        <PageLogin authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route exact path="/register">
        <PageRegister authenticated={authenticated}/>
      </Route>
      <Route exact path="/dashboard">
          <Dashboard authenticated={authenticated}/>
      </Route>
    </Switch>
  );
}

export default Routes;