import React, { useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import PropTypes from "prop-types";

const INITIAL_LATITUDE = 50;
const INITIAL_LONGITUDE = 25;
const INITIAL_ZOOM = 4;

export const Map = ({ temperatures, isCelsius }) => {
  // Viewport of the Mapbox map.
  const [viewport, setViewport] = useState({
    height: window.outerHeight,
    width: window.outerWidth,
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
    zoom: INITIAL_ZOOM,
  });

  const convertFahrenheit = (temperatureCelsius) => {
    return (9 / 5.0) * temperatureCelsius + 32;
  };

  const getPrettyTemperature = (temperatureCelsius) => {
    if (isCelsius) {
      return `${temperatureCelsius} C`;
    } else {
      return `${convertFahrenheit(temperatureCelsius)} F`;
    }
  };

  const geoJsonFeatures = temperatures.map((temperature) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [temperature.lon, temperature.lat],
    },
    properties: {
      title: getPrettyTemperature(temperature.temp),
      icon: "circle",
    },
  }));

  const geoJson = {
    type: "FeatureCollection",
    features: geoJsonFeatures,
  };

  const _map = (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Source id="temperature-data" type="geojson" data={geoJson}>
        <Layer
          id="point"
          type="symbol"
          layout={{
            "icon-image": ["concat", ["get", "icon"], "-15"],
            "text-field": ["get", "title"],
            "text-offset": [0, -0.6],
            "text-anchor": "bottom",
          }}
        />
      </Source>
    </ReactMapGL>
  );

  return _map;
};

Map.propTypes = {
  temperatures: PropTypes.array.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default Map;
