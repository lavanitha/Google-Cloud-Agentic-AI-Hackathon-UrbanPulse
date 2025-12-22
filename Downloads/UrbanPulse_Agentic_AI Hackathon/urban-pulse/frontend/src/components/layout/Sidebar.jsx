import React from "react";

const Sidebar = ({
  activeCategory,
  onCategoryChange,
  onSubmitReport, // ✅ REQUIRED for modal
  eventCounts,
}) => {
  const categories = [
    { name: "Traffic", count: eventCounts.Traffic, color: "#ff4d4f", sub: "Severe Congestion" },
    { name: "Infrastructure", count: eventCounts.Infrastructure, color: "#fa8c16", sub: "Road / Power" },
    { name: "Public Safety", count: eventCounts["Public Safety"], color: "#1890ff", sub: "Alerts" },
    { name: "Social Event", count: eventCounts["Social Event"], color: "#722ed1", sub: "Festivals" },
    { name: "Weather", count: eventCounts.Weather, color: "#52c41a", sub: "Rain / Heat" },
  ];

  return (
    <aside
      style={{
        width: "280px",
        height: "100vh",
        background: "var(--bg-panel)",
        color: "var(--text-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "20px 16px",
        borderRight: "1px solid var(--border-soft)",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent-red)",
            }}
          />
          <span style={{ fontSize: 20, fontWeight: 600 }}>
            Urban Pulse
          </span>
        </div>
      </div>

      {/* ✅ Submit Report Button */}
      <button
  onClick={onSubmitReport}
  style={{
    background: "var(--accent-red)",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: 24,
  }}
>
  Submit Report
</button>

      {/* Live Events */}
      <div>
        <div
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            marginBottom: 12,
            textTransform: "uppercase",
          }}
        >
          Live Events
        </div>

        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => onCategoryChange(cat.name)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 8px",
              borderRadius: 8,
              cursor: "pointer",
              marginBottom: 4,
              background:
                activeCategory === cat.name
                  ? "var(--bg-hover)"
                  : "transparent",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: cat.color,
                }}
              />
              <div>
                <div style={{ fontSize: 14 }}>{cat.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {cat.sub}
                </div>
              </div>
            </div>

            <span
              style={{
                background: "var(--bg-card)",
                padding: "2px 8px",
                borderRadius: 12,
                fontSize: 12,
              }}
            >
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
