import React, { Component } from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute, 
  Link
} from 'react-router';
import Home from "./template/home/home.jsx"
import List from "./template/list/list.jsx"
import Header from "./template/header/header.jsx"
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route component={Header}>
                <Route path="/" component={Home}></Route>
                <Route path="/list" component={List}></Route>   
            </Route>
        </Router> 
       
    )
  }
}

export default App;
