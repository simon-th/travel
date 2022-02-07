import React from "react";
import GoogleMapReact, { MapOptions } from 'google-map-react';
import { useMediaQuery } from "react-responsive";
import Marker from "./marker";
import locations from "../content/locations";
import breakpoints from "../util/responsive-breakpoints";

function createMapOptions(): MapOptions {
  const mapId = process.env.NEXT_PUBLIC_MAP_ID ? process.env.NEXT_PUBLIC_MAP_ID : ''

  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    mapId,
    minZoom: 1
  }
}

export default function Map(){
  const initialPosition = {
    center: {
      lat: 30,
      lng: -80
    },
    zoom: 2
  };

  const isMd = useMediaQuery({ query: `(min-width: ${breakpoints.md})` });
  const isXl = useMediaQuery({ query: `(min-width: ${breakpoints.xl})` })

  if (isXl) {
    initialPosition.center.lng = 0;
    initialPosition.zoom = 2.5
  } else if (isMd) {
    initialPosition.zoom = 2.5
  }

  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY ? process.env.NEXT_PUBLIC_MAPS_API_KEY : ''

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={initialPosition.center}
      defaultZoom={initialPosition.zoom}
      options={createMapOptions()}
    >
      {locations.map((location) => <Marker
          lat={location.lat}
          lng={location.lng}
          key={location.name}
        />)}
    </GoogleMapReact>
  );
}