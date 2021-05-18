import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';


import Main from './Components/Main';

import './Stylesheet/main.scss';


export default function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>


  )
}