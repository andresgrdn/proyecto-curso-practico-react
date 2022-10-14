import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import '@styles/global.css';
import PasswordRecovery2 from "@containers/PasswordRecovery2";
import Home from '@pages/Home';
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password-2" component={PasswordRecovery2} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;