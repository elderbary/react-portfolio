import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../Pages/Home";
import About from "../Pages/About";
import CV from "../Pages/CV";
import Contact from "../Pages/Contact";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/o-mnie" exact component={About} />
          <Route path="/cv" exact component={CV} />
          <Route path="/kontakt" exact component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
