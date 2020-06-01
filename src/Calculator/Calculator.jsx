import React, { useState } from "react";
import Keypads from "./Keypads";
import Result from "./Result";
import "./calculator.css";
export default ({ initialValue }) => {
 const [result, setResult] = useState(initialValue);

 const handleClick = (button) => {
  switch (button) {
   case "=":
    calculate();
    break;
   case "AC":
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
   setResult(
    (eval(result) % 1 != 0 ? eval(result).toFixed(2) : eval(result) || "") + ""
   );
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
  <div className="calculator-body">
   <Result result={result} />
   <Keypads onClick={handleClick} />
  </div>
 );
};
