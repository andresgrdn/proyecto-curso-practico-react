import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@styles/global.css';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecoveryPage from "@pages/PasswordRecoveryPage";
import PasswordRecoveryConfirmation from "@pages/PasswordRecoveryConfirmation";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password-recovery" component={PasswordRecoveryPage} />
        <Route exact path="/password-recovery-confirmation" component={PasswordRecoveryConfirmation} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;