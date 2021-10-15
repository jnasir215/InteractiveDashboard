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
      <Map />
      <ReactTooltip>{content}</ReactTooltip>
      <Cards />
    </div>
  );
}

app.use(express.static(__dirname));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);