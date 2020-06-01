import React from "react";

export default (props) => {
 let { result } = props;
 return (
  <div className="result">
   <p>{result}</p>
  </div>
 );
};
