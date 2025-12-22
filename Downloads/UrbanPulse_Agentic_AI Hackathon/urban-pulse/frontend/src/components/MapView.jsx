import React, { useState } from "react";
import NotificationsPanel from "../components/NotificationsPanel";
import {
  GoogleMap,
  Marker,
  LoadScript
} from "@react-google-maps/api";

import { lightMapStyle, darkMapStyle } from "../styles/mapStyle";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const center = {
  lat: 13.0674,
  lng: 80.2376
};

const MapView = ({ markers = [] }) => {
  const [isDark, setIsDark] = useState(false);

  // ✅ selected report state
  const [selectedReport, setSelectedReport] = useState(null);

  // Marker icon by category
  const getMarkerIcon = (category) => {
    const icons = {
      Traffic: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      Infrastructure: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
      "Public Safety": "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      "Social Event": "https://maps.google.com/mapfiles/ms/icons/purple-dot.png",
      Weather: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    };
    return icons[category] || icons.Traffic;
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Day / Night Toggle */}
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          zIndex: 10,
          background: "#111",
          borderRadius: 20,
          padding: "6px 10px",
          display: "flex",
          gap: 6
        }}
      >
        <button
          onClick={() => setIsDark(false)}
          style={{
            background: !isDark ? "#fff" : "#222",
            color: !isDark ? "#000" : "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: 14,
            cursor: "pointer"
          }}
        >
          ☀ Day
        </button>

        <button
          onClick={() => setIsDark(true)}
          style={{
            background: isDark ? "#fff" : "#222",
            color: isDark ? "#000" : "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: 14,
            cursor: "pointer"
          }}
        >
          🌙 Night
        </button>
      </div>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          options={{
            styles: isDark ? darkMapStyle : lightMapStyle,
            disableDefaultUI: true,
            zoomControl: true
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={getMarkerIcon(marker.category)}
              onClick={() => setSelectedReport(marker)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {/* ✅ FINAL RIGHT-SIDE NOTIFICATIONS PANEL */}
      {selectedReport && (
        <NotificationsPanel
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
};

export default MapView;
