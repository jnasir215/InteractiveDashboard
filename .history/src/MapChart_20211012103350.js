import React, { memo } from "react";
import { geoPath } from "d3-geo";
//import { geoTimes } from "d3-geo-projection";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import Cards from "./Card";
//import PopUp from "./PopUp";

//import allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
//const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-10m.json";

function rounded(num) {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
}

function onGeographyClick(scale, projection, onCoordinatesClick) {
  const gp = geoPath().projection(projection);

  return function (geo, evt) {
    const dim = evt.target.getBoundingClientRect();
    const cx = evt.clientX - dim.left;
    const cy = evt.clientY - dim.top;
    const [orgX, orgY] = gp.bounds(geo)[0];

    onCoordinatesClick(
      projection.invert([
        orgX + cx / (scale() * 100000),
        orgY + cy / (scale() * 100000),
      ])
    );
  };
}

function MapChart({ setTooltipContent }) {
  return (
    <>
      <ComposableMap
        data-tip=""
        width="700"
        height="400"
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 800 }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { name } = geo.properties;
                    setTooltipContent(`${name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  /** onClick={(obj, e) => {
                        onClick(obj)
                        setCenter(e.clientX, e.clientY)
                        // setZoom(1.5)
                      }} */
                  onClick={onGeographyClick}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      
    </>
  );
}

export default memo(MapChart);

<Cards />