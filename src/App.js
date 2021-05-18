import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';


import Main from './Components/Main';
import Article from './Components/Article';

import './Stylesheet/main.scss';


export default function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/article" component={Article} />
        </Switch>
      </Router>
    </>


  )
}