// src/styles/mapStyle.js

export const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#0b1c2d" }] },

  { elementType: "labels.text.fill", stylers: [{ color: "#9fb3c8" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0b1c2d" }] },

  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#223b53" }],
  },

  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6f9ba5" }],
  },

  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#102636" }],
  },

  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1e3c56" }],
  },

  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#172e45" }],
  },

  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#2c5d87" }],
  },

  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1b3a57" }],
  },

  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#18324a" }],
  },

  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#071a2a" }],
  },

  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4e8aa8" }],
  },
];

export const lightMapStyle = []; // default Google light map
