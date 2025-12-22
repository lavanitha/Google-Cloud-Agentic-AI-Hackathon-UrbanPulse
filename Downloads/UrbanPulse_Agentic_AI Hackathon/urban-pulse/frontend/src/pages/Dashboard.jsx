import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import MapView from "../components/MapView";
import SubmitReportModal from "../components/modals/SubmitReportModal";

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("map"); // map | mood

  // ✅ Modal state (CORRECT)
  const [isReportOpen, setIsReportOpen] = useState(false);

  // ✅ Markers and event counts state
  const [markers, setMarkers] = useState([]);
  const [eventCounts, setEventCounts] = useState({
    Traffic: 0,
    Infrastructure: 0,
    "Public Safety": 0,
    "Social Event": 0,
    Weather: 0,
  });

  // Sample location for reports
  const sampleLocation = {
    lat: 13.0827,
    lng: 80.2707,
    area: "Near Egmore, Chennai, India",
  };

  // Load initial reports and counts
  // useEffect(() => {
  //   const loadReports = async () => {
  //     try {
  //       const response = await api.get("/reports");
  //       if (response.data.success) {
  //         const reports = response.data.data;
  //         const newMarkers = reports.map((report) => ({
  //           position: { lat: report.location.latitude, lng: report.location.longitude },
  //           category: report.title, // Assuming title is category
  //         }));
  //         setMarkers(newMarkers);

  //         // Update counts
  //         const counts = { ...eventCounts };
  //         reports.forEach((report) => {
  //           if (counts[report.title]) {
  //             counts[report.title]++;
  //           }
  //         });
  //         setEventCounts(counts);
  //       }
  //     } catch (error) {
  //       console.error("Failed to load reports:", error);
  //       // Don't crash the app, just log the error
  //     }
  //   };
  //   loadReports();
  // }, []);

  // Handle submit report
  const handleSubmitReport = async (reportData) => {
    // Temporarily just update UI without API call
    // Add marker
    setMarkers((prev) => [
      ...prev,
      { position: { lat: reportData.location.lat, lng: reportData.location.lng }, category: reportData.category },
    ]);
    // Update count
    setEventCounts((prev) => ({
      ...prev,
      [reportData.category]: prev[reportData.category] + 1,
    }));
    // Close modal
    setIsReportOpen(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onSubmitReport={() => setIsReportOpen(true)}
        eventCounts={eventCounts}
      />

      {/* Main Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        <div style={{ flex: 1, position: "relative" }}>
          {activeTab === "map" && (
            <MapView
              activeCategory={activeCategory}
              markers={markers}
            />
          )}

          {activeTab === "mood" && (
            <div style={{ padding: 20 }}>
              <h2>Mood Analysis (Coming Next)</h2>
            </div>
          )}
        </div>
      </div>

      {/* Submit Report Modal */}
      {isReportOpen && (
        <SubmitReportModal 
          onClose={() => setIsReportOpen(false)} 
          onSubmit={handleSubmitReport}
          location={sampleLocation}
        />
      )}
    </div>
  );
};

export default Dashboard;
