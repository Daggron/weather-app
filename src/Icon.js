import React from "react";
import "./App.css";
import Skycons from "react-skycons";

export default class Icon extends React.Component {
  
  shouldComponentUpdate() {
    return true;
  }
  

  render() {
    return (
      <div className="icon">
        <Skycons icon={this.props.name} color='white' className="white"/>
      </div>
    );
  }
}
