/* eslint no-eval: 0  */
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

// style CSS
import "./css/App.css";

const App = () => {
  //Array Destructuring
  const [text, setText] = useState("");
  const items = words(text, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <div className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          setText(`${text}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          setText("");
        }}
        onDelete={() => {
          if (text.length > 0) {
            const newText = text.substring(0, text.length - 1);

            setText(newText);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setText(`${text}${operation}`);
        }}
        onClickEqual={(equal) => {
          setText(eval(text).toString());
        }}
      />
    </div>
  );
};

export default App;
