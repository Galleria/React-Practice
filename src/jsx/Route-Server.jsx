
import { Router, Route , IndexRoute ,hashHistory,browserHistory } from 'react-router'
// browserHistory  reacl url
// hashHistory     hash url

import React,{Component} from 'react'

import App from './container/Header.jsx';
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import List from './Page/List.jsx';
import ListServer from './Page/ListServer.jsx';
import Blank from './Page/Blank.jsx';
import NotFound from './Page/NotFound.jsx';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/list" component={() => <List data={data}/> } />
    <Route path="/listfromServer" component={ListServer} >
      <Route path=':id' component={NotFound} />
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;

const data = [
    { link:'/repos/reactjs/react-router', name:'React' },
    { link:'/repos/facebook/hello-facebook', name:'Facebook' }
  ];
