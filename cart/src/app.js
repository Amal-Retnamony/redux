import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import home from "../src/components/Home.jsx";
import Result from "../src/components/Result.jsx";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <p align="right">
            <Link to={"/"}>Home</Link>
          </p>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/Result" component={Result} />
          </Switch>
        </div>
      </Router>
    );
  }
}
