import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Spring, config } from "react-spring";
import chroma from "chroma-js";
import Cards from "./Card";

const geoPaths = ["/us3.json", "/deTopo.json"];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const colorScale = chroma.brewer.Oranges.slice(1);
const scl = chroma
  .scale(["#FFF", "#FF5419", "#000"])
  .mode("lch")
  .colors(8);

const colors = Array(180)
  .fill()
  .map(d => colorScale[getRandomInt(0, colorScale.length - 1)]);

class MyApp extends Component {
  state = {
    detail: false,
    paths: geoPaths[0],
    center: [0, 0],
    zoom: 1
  };
  switchPaths = (a, b, c) => {
    const { detail } = this.state;
    this.setState({
      paths: detail ? geoPaths[0] : geoPaths[1],
      center: detail ? [0, 0] : [8, 47],
      zoom: detail ? 1 : 60,
      detail: !detail
    });
  };
  render() {
    return (
      <div>
        {"Click on the map!"}
        <Spring
          from={{ zoom: 1 }}
          to={{ zoom: this.state.zoom }}
          config={config.slow}
        >
          {styles => (
            <ComposableMap style={{ width: "200%", height: "200%" }}>
              <ZoomableGroup center={this.state.center} zoom={styles.zoom}>
                <Geographies geography={this.state.paths} disableoptimization="true">
                  {(geos, proj) =>
                    geos.map((geo, i) => (
                      <Geography
                        key={
                          (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                        }
                        cacheId={
                          (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                        }
                        geography={geo}
                        projection={proj}
                        onClick={this.switchPaths}
                        style={{
                          default: {
                            fill: colors[i],
                            outline: "none"
                          },
                          hover: {
                            outline: "none"
                          },
                          pressed: {
                            outline: "none"
                          }
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Spring>
        <Cards />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);