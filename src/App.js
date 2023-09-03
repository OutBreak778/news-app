import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBar from './components/NewsBar.js';
// import NewsItem from './components/NewsItem';
import { BrowserRouter as Router , Route } from "react-router-dom";
import { Switch } from 'react-router-dom'
// import Spinner from './components/loading';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <NewsBar key="general" pageSize={9} country="in" category="general" />
            </Route>
            <Route exact path="/science">
              <NewsBar key="science" pageSize={9} country="in" category="science" />
            </Route>
            <Route exact path="/business">
              <NewsBar key="business" pageSize={9} country="in" category="business" />
            </Route>
            <Route exact path="/sports">
              <NewsBar key="sports" pageSize={9} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <NewsBar key="technology" pageSize={9} country="in" category="technology" />
            </Route>
            <Route exact path="/entertainment">
              <NewsBar key="entertainment" pageSize={9} country="in" category="entertainment" />
            </Route>
            <Route path="/health">
              <NewsBar key="health" pageSize={9} country="in" category="Health" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

