import React from "react";
import { connect } from "react-redux";
import {  handleinput , buttonClicked } from "../actions/index.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./Result.jsx";
import "../style.css";

var val1 = "";
var sObject = {
  name1: "",
  age1: "",
  phone1: ""
};

const mapStateToProps = state => ({
  count: state.example.count,
  name: state.example.name
});

const mapDispatchToProps = dispatch => ({
  buttonClicked: () => dispatch(handleinput(sObject))
});

class home extends React.Component {
  constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
  }

  handlechange = (id, event) => {
     val1 = event.target.value;
   switch (id) {
       case 1:
         sObject.name1 = val1;
        break;
      case 2:
        sObject.age1 = val1;
        break;
      case 3:
         sObject.phone1 = val1;
        break;
     }
   };


  nextPath(path) {
    console.log("name:"+this.props.name);
    this.props.buttonClicked();
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <div align="center">
          name:<input type="text" onChange={this.handlechange.bind(this,1)} /><br />
          age:<input type="text" onChange={this.handlechange.bind(this, 2)} /><br />
          phone:<input type="text" onChange={this.handlechange.bind(this, 3)} /><br />
          <button onClick={this.nextPath.bind(this,'/Result')}>submit</button>
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
