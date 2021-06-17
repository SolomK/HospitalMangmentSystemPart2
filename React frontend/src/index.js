import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './index.css';
import App from './App';
import DOc from './DOc';
import Docedit from './Docedit';
import Lab from './Lab';
import Labedit from './Labedit';
import login from './login';
import patient from './patient';
import main from './main';



ReactDOM.render (
    <BrowserRouter>

        <Switch>

          <Route path="/" exact component={App}/> 
          <Route path="/DOc" component={DOc}/> 
          <Route path="/Docedit" component={Docedit}/>
          <Route path="/Lab" component={Lab}/> 
          <Route path="/Labedit" component={Labedit}/> 
          <Route path="/login" component={login}/> 
          <Route path="/patient" component={patient}/> 
          <Route path="/main" component={main}/> 
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
