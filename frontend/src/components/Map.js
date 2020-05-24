import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const useStyles = makeStyles((theme) => ({

}));

export const Map = ({ temperatures, isCelsius }) => {
  const classes = useStyles();

  const convertFahrenheit = temperatureCelsius => {
    return 9/5.0 * temperatureCelsius + 32;
  }

  const getPrettyTemperature = temperatureCelsius => {
    if (isCelsius) {
      return `${temperatureCelsius} C`;
    } else {
      return `${convertFahrenheit(temperatureCelsius)} F`;
    }
  };

  const geoJsonFeatures = temperatures.map(temperature => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [temperature.lon, temperature.lat]
    },
    properties: {
      title: getPrettyTemperature(temperature.temp),
      icon: 'circle'
    }
  }));
  const geoJson = {
    type: 'FeatureCollection',
    features: geoJsonFeatures
  };

  const [viewport, setViewport] = useState({
    height: window.outerHeight,
    width: window.outerWidth,
    latitude: 50,
    longitude: 25,
    zoom: 4,
  });

  const _map = (
    <>
    <ReactMapGL
      className={classes.map}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Source id="my-data" type="geojson" data={geoJson}>
        <Layer
          id="point"
          type="symbol"
          layout={{
            'icon-image': ['concat', ['get', 'icon'], '-15'],
            'text-field': ['get', 'title'],
            'text-offset': [0, -0.6],
            'text-anchor': 'bottom'
          }}
        />
      </Source>
    </ReactMapGL>
    </>
  );

  return _map;
};

export default Map;