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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve((__dirname, "../build", "index.html")));
  });
}