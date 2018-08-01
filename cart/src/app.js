import React from "react";
import { connect } from "react-redux";
import { buttonClicked, handleinput } from "./actions";
import "./styles.css";

var val1 = "";
var val2 = "";
var arr = [];
const mapStateToProps = state => ({
  count: state.example.count,
  name: state.example.name
});

const mapDispatchToProps = dispatch => ({
  buttonClicked: () => dispatch(handleinput(val1))
  //handleinput: () => dispatch(handleinput("hf"))
});

class Example extends React.Component {
  constructor(props) {
    super(props);
    // this.handlechange= this.handlechange.bind(this);
  }

  handlechange = event => {
    val1 = val1 + "/" + event.target.value;
    console.log(val1);
  };
  //handlechange1 = event => {
  //val2 = event.target.value;
  // console.log(val2);
  // };
  render() {
    return (
      <div>
        name:<input type="text" onBlur={this.handlechange.bind(this)} />
        <br />
        age:<input type="text" onBlur={this.handlechange.bind(this)} />
        <br />
        phone-no:<input type="text" onBlur={this.handlechange.bind(this)} />
        <button onClick={this.props.buttonClicked}>Clicked</button>
        <span> {(arr = this.props.name.split("/"))}</span>
        <p>first name:{arr[1]}</p>
        <p>age:{arr[2]}</p>
        <p>phone-no:{arr[3]}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
