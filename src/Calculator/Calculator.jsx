import React, { useState } from "react";
import Keypads from "./Keypads";
import Result from "./Result";

export default ({ initialValue }) => {
 const [result, setResult] = useState("");

 const handleClick = (button) => {
  switch (button) {
   case "=":
    calculate();
    break;
   case "C":
    reset();
    break;
   case "CE":
    backspace();
    break;
   default:
    setResult(result + button);
    break;
  }
 };

 const calculate = () => {
  try {
   setResult((eval(result) || "") + "");
  } catch (err) {
   setResult("Error");
  }
 };

 const reset = () => {
  setResult("");
 };

 const backspace = () => {
  setResult(result.slice(0, -1));
 };

 return (
  <div>
   <div className="calculator-body">
    <h1>Calculator</h1>
    <Result result={result} />
    <Keypads onClick={handleClick} />
   </div>
  </div>
 );
};
