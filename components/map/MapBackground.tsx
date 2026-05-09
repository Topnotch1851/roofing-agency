"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Pin = {
  name: string;
  lat: number;
  lng: number;
  primary?: boolean;
};

const pins: Pin[] = [
  { name: "Dallas", lat: 32.7767, lng: -96.797, primary: true },
  { name: "Plano", lat: 33.0198, lng: -96.6989 },
  { name: "Frisco", lat: 33.1507, lng: -96.8236 },
  { name: "Richardson", lat: 32.9483, lng: -96.7299 },
  { name: "Garland", lat: 32.9126, lng: -96.6389 },
  { name: "Irving", lat: 32.814, lng: -96.9489 },
  { name: "Arlington", lat: 32.7357, lng: -97.1081 },
  { name: "McKinney", lat: 33.1972, lng: -96.6397 },
];

export default function MapBackground() {
  return (
    <MapContainer
      center={[32.88, -96.82]}
      zoom={10}
      minZoom={9}
      maxZoom={13}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{
        width: "100%",
        height: "100%",
        background: "var(--paper-2)",
      }}
      className="map-warm"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
      />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
      />

      {pins.map((pin) => (
        <CircleMarker
          key={pin.name}
          center={[pin.lat, pin.lng]}
          radius={pin.primary ? 10 : 6}
          pathOptions={{
            color: pin.primary ? "#2f6b4a" : "#23201c",
            fillColor: pin.primary ? "#2f6b4a" : "#23201c",
            fillOpacity: 1,
            weight: pin.primary ? 4 : 3,
            opacity: 1,
          }}
        >
          <Tooltip
            permanent
            direction="top"
            offset={[0, -10]}
            className="map-tip"
          >
            {pin.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
