import React from "react";

interface MarkerProps {
  // eslint-disable-next-line react/no-unused-prop-types
  lat: number,
  // eslint-disable-next-line react/no-unused-prop-types
  lng: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Marker(props: MarkerProps) {
  return <div className="w-3 h-3 relative -left-1.5 -top-1.5 rounded-full bg-teal-700 opacity-50 transition ease-in-out hover:scale-125"/>
}