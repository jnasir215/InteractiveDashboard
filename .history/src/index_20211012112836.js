import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import Map from "./MapChart";
//import MapChart from "./MapChart";
import Cards from "./Card";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Cards />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);