import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <div className="wizard">
        <Content />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
