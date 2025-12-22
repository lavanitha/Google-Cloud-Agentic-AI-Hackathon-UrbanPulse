import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import MapView from "../components/MapView";
import EventDetailsPanel from "../components/map/EventDetailsPanel";

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("Traffic");
  const [activeTab, setActiveTab] = useState("map");
  const [selectedReport, setSelectedReport] = useState(null);

  // 🔹 Dummy report (UI-only for now)
  const dummyReport = {
    id: "1",
    category: "Traffic",
    title: "Multiple Road Blockages in City",
    description:
      "Heavy rain and a large gathering at Marina Beach combined with multiple road blockages have led to city-wide traffic congestion.",
    location: {
      lat: 13.0649,
      lng: 80.2433,
    },
    time: "5 minutes ago",
    affectedAreas: ["Anna Salai", "Nungambakkam", "Marina Beach"],
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar */}
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Body */}
        <div style={{ flex: 1, display: "flex" }}>
          {/* Center Area */}
          <div style={{ flex: 1 }}>
            {activeTab === "map" && (
              <MapView onSelectReport={setSelectedReport} />
            )}

            {activeTab === "mood" && (
              <div style={{ padding: 20 }}>
                <h2>Mood Analysis (Coming Next)</h2>
              </div>
            )}
          </div>

          {/* Right-side Event Details Panel */}
          <EventDetailsPanel
            report={selectedReport || dummyReport}
            onClose={() => setSelectedReport(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
