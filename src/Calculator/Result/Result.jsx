import React from "react";
import "./result.css";
export default (props) => {
 let { result } = props;
 return (
  <div className="result">
   <div className="result-text">{result}</div>
  </div>
 );
};
