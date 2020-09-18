import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { SubmissionList } from './views/submissionList';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/submissions">
          <SubmissionList />
        </Route>
      </Switch>  
    </BrowserRouter>
    </>
  );
}

export default injectContext(App);
