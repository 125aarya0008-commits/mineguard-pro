import { useState } from "react";

import {
  HeartPulse,
  Activity,
  Thermometer,
  PersonStanding
} from "lucide-react";

import PageLayout from "../components/PageLayout";
import MetricCard from "../components/MetricCard";
import HealthChart from "../components/HealthChart";

import {
  workers,
  healthHistory
} from "../data/mockData";

export default function Health() {

  const [selectedWorkerId, setSelectedWorkerId] =
    useState("WKR-001");

  const selectedWorker =
    workers.find(
      worker =>
        worker.id === selectedWorkerId
    );

  return (
    <PageLayout
      eyebrow="BIOMETRIC MONITORING"
      title="Health Monitoring"
      subtitle="Real-time worker health and wearable sensor data"
    >

      <section className="health-worker-selector card">

        <div>
          <span className="section-label">
            SELECT WORKER
          </span>

          <strong>
            Individual Health Monitoring
          </strong>
        </div>

        <select
          value={selectedWorkerId}
          onChange={e =>
            setSelectedWorkerId(
              e.target.value
            )
          }
        >

          {workers.map(worker => (
            <option
              key={worker.id}
              value={worker.id}
            >
              {worker.id} — {worker.name}
            </option>
          ))}

        </select>

      </section>

      <div className="health-grid">

        <MetricCard
          title="Heart Rate"
          value={selectedWorker.heartRate}
          unit="BPM"
          icon={HeartPulse}
        />

        <MetricCard
          title="SpO₂"
          value={selectedWorker.spo2}
          unit="%"
          icon={Activity}
        />

        <MetricCard
          title="Body Temperature"
          value={selectedWorker.bodyTemp}
          unit="°C"
          icon={Thermometer}
        />

        <MetricCard
          title="Fall Status"
          value={
            selectedWorker.fall
              ? "Detected"
              : "Normal"
          }
          unit=""
          icon={PersonStanding}
        />

      </div>

      <HealthChart
        worker={selectedWorker}
        healthHistory={healthHistory}
      />

      <section className="health-thresholds card">

        <div className="section-heading compact">

          <div>
            <p className="section-label">
              SAFETY LIMITS
            </p>

            <h2>
              Health Thresholds
            </h2>
          </div>

        </div>

        <div className="threshold-grid">

          <div>
            <span>Heart Rate</span>
            <strong>
              60 – 100 BPM
            </strong>
          </div>

          <div>
            <span>SpO₂</span>
            <strong>
              ≥ 95%
            </strong>
          </div>

          <div>
            <span>Body Temperature</span>
            <strong>
              36.0 – 37.5°C
            </strong>
          </div>

          <div>
            <span>Fall Detection</span>
            <strong>
              Automatic Alert
            </strong>
          </div>

        </div>

      </section>

    </PageLayout>
  );
}