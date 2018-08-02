import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    name: state.example.name,
    age: state.example.age,
    phone: state.example.phone
  };
};

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div align="center">
        <p>NAME:{this.props.name}</p>
        <p>AGE:{this.props.age}</p>
        <p>PHONE:{this.props.phone}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Result);
