import "leaflet/dist/leaflet.css";
import "./Map.css";

import * as L from "leaflet";

import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

function Map(props) {
  const { lat, lng, zoom, basemapURL, data, setIsLoading } = props;

  const map = useRef();

  useEffect(() => {
    map.current = L.map("map", {
      center: [lat, lng],
      zoom,
      zoomControl: false,
    });
    const basemap = L.tileLayer(basemapURL, {
      detectRetina: true,
      retina: "@2x",
    });
    basemap.addTo(map.current);
    return () => {
      map.current.remove();
    };
  }, [lat, lng, zoom, basemapURL]);

  useEffect(() => {
    data.forEach((point) => {
      L.circle([point.latitude, point.longitude], {
        color: `#${point.color || "3388ff"}`,
        radius: 1,
      }).addTo(map.current);
    });
    setIsLoading(false);
  }, [data, setIsLoading]);

  return <div id="map" />;
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  basemapURL: PropTypes.string,
  data: PropTypes.array,
  setIsLoading: PropTypes.func,
};
Map.defaultProps = {
  zoom: 13,
  basemapURL:
    "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png",
};

export default Map;
