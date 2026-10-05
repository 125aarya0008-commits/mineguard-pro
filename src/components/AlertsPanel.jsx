import {
  AlertTriangle,
  BellRing
} from "lucide-react";

export default function AlertsPanel({ alerts }) {
  return (
    <section className="alerts-panel card">

      <div className="section-heading compact">
        <div>
          <p className="section-label">ACTIVITY</p>
          <h2>Recent Alerts</h2>
        </div>

        <span className="alert-count">
          {alerts.length}
        </span>
      </div>

      <div className="alerts-list">

        {alerts.map((alert) => (

          <div
            className={`alert-item ${alert.type}`}
            key={alert.id}
          >

            <div className="alert-icon">
              {alert.type === "critical"
                ? <BellRing size={17} />
                : <AlertTriangle size={17} />
              }
            </div>

            <div className="alert-content">
              <strong>{alert.message}</strong>
              <span>
                {alert.worker} · {alert.time}
              </span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}