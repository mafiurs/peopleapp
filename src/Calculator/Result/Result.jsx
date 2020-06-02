import React from "react";
import "./result.css";

export default ({ result }) => {
  return (
    <div className="result">
      <div className="result-text">{result}</div>
    </div>
  );
};
