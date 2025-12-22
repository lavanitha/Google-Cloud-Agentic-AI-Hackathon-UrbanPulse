import React from "react";
import "./NotificationsPanel.css";

const NotificationsPanel = ({ report, onClose }) => {
  return (
    <div className="notif-panel">
      {/* Header */}
      <div className="notif-header">
        <div>
          <h3>Notifications</h3>
          <span className="subtext">Notifications</span>
        </div>
        <div className="header-actions">
          <span className="mark-read">Mark all as read</span>
          <button onClick={onClose}>✕</button>
        </div>
      </div>

      {/* Alert Card */}
      <div className="notif-card">
        <div className="alert-title">
          <span className="alert-icon">⚠</span>
          <h4>Multiple Road Blockages in City</h4>
        </div>

        <img
          src="https://media.istockphoto.com/id/2126967831/photo/cars-in-a-traffic-jam-in-the-center-of-a-big-city-at-night.jpg?s=612x612&w=0&k=20&c=82pt8s3vjcRy6GjTo31NsIWtTAXatPBtNki74eSZeME="
          alt="traffic"
        />

        <div className="meta">
          <span>📍 13.0649, 80.2439</span>
          <span>⏱ 5 minutes ago</span>
        </div>

        <p className="desc">
          Heavy rain and large gatherings at Marina Beach combined with multiple
          road blockages have led to a prediction of city-wide traffic congestion
          and accidents today.
        </p>

        <div className="affected">
          <h5>Affected Areas</h5>
          <ul>
            <li>Anna Salai</li>
            <li>Nungambakkam</li>
            <li>Marina Beach</li>
          </ul>
        </div>

        <button className="subscribe-btn">
          Subscribe to Updates
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
