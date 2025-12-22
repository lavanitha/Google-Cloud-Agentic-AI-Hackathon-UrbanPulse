import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopBar />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </div>
  );
}
