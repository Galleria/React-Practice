
import { Router, Route , IndexRoute , Link ,hashHistory,browserHistory } from 'react-router'
// browserHistory  reacl url
// hashHistory     hash url

import React,{Component} from 'react'

import Main from './layout/layout.jsx';
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import Login from './Page/Login.jsx';
import List from './Page/List.jsx';
import ListServer from './Page/ListServer.jsx';
import Blank from './Page/Blank.jsx';
import NotFound from './Page/NotFound.jsx';

import Repo from './Page/Repo.jsx'

export default class RouteApp extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lists" component={() => <List data={window.data}/> } />
          <Route path="/list" >
            <Route path=':repoName/:userName' component={Repo} />
          </Route>
          <Route path="/login" component={() => <Login /> } />
          <Route path="/listfromServer" component={() => <ListServer /> } />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
      )
  }
}

window.data = [
    { link:'/list/reactjs/facebook', name:'React-Facebook' },
    { link:'/list/angular/google', name:'Angular2-Google' },
    { link:'/list/vue/mit', name:'Vue2-MIT' }
  ];
