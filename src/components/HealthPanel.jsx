import {
  HeartPulse,
  Activity,
  Thermometer,
  PersonStanding
} from "lucide-react";

import MetricCard from "./MetricCard";

export default function HealthPanel({ worker }) {
  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="section-label">LIVE MONITORING</p>
          <h2>Health Monitoring</h2>
        </div>

        <span className="worker-reference">
          {worker.id} · {worker.name}
        </span>
      </div>

      <div className="health-grid">
        <MetricCard
          title="Heart Rate"
          value={worker.heartRate}
          unit="BPM"
          icon={HeartPulse}
        />

        <MetricCard
          title="SpO₂"
          value={worker.spo2}
          unit="%"
          icon={Activity}
        />

        <MetricCard
          title="Body Temperature"
          value={worker.bodyTemp}
          unit="°C"
          icon={Thermometer}
        />

        <MetricCard
          title="Fall Status"
          value={worker.fall ? "Detected" : "Normal"}
          unit=""
          icon={PersonStanding}
          status={worker.fall ? "Emergency" : "Normal"}
        />
      </div>
    </section>
  );
}