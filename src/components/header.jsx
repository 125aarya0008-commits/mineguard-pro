import { Bell, Wifi } from "lucide-react";

export default function Header({ emergency }) {
  return (
    <header className="top-header">
      <div>
        <p className="eyebrow">CONTROL & WORKER SAFETY</p>
        <h1>MineGuard Pro</h1>
        <p className="header-subtitle">
          Real-time mine safety monitoring
        </p>
      </div>

      <div className="header-actions">
        <div className={`system-status ${emergency ? "critical" : ""}`}>
          <span className="status-dot"></span>
          {emergency ? "Emergency Active" : "System Operational"}
        </div>

        <div className="connection-status">
          <Wifi size={16} />
          Gateway Connected
        </div>

        <button className="icon-button">
          <Bell size={18} />
        </button>

        <div className="control-room">
          <div className="avatar">CR</div>
          <div>
            <strong>Control Room</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}