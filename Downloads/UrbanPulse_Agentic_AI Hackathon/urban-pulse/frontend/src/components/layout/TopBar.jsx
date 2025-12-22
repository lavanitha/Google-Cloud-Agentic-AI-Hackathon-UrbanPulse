import React from "react";

const TopBar = () => {
  return (
    <header
      style={{
        height: "56px",
        background: "var(--bg-panel)",
        borderBottom: "1px solid var(--border-soft)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      {/* LEFT: Tabs */}
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            padding: "6px 14px",
            borderRadius: 8,
            background: "var(--bg-card)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Live Map
        </div>

        <div
          style={{
            padding: "6px 14px",
            borderRadius: 8,
            color: "var(--text-muted)",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Mood Analysis
        </div>
      </div>

      {/* RIGHT: Icons */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ cursor: "pointer" }}>🌙</span>
        <span style={{ cursor: "pointer" }}>🔔</span>
        <span style={{ cursor: "pointer" }}>⚙️</span>
      </div>
    </header>
  );
};

export default TopBar;
