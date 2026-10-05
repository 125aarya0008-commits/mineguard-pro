import {
  BellRing,
  TriangleAlert,
  HeartPulse,
  Radio,
  Wind
} from "lucide-react";

import PageLayout from "../components/PageLayout";

const alertHistory = [
  {
    id: 1,
    type: "critical",
    title: "Emergency SOS Activated",
    worker: "WKR-006",
    zone: "C2",
    time: "10:34 AM",
    category: "SOS"
  },
  {
    id: 2,
    type: "critical",
    title: "Worker Communication Lost",
    worker: "WKR-002",
    zone: "A2",
    time: "10:32 AM",
    category: "Communication"
  },
  {
    id: 3,
    type: "critical",
    title: "Fall Detected",
    worker: "WKR-003",
    zone: "B1",
    time: "10:31 AM",
    category: "Health"
  },
  {
    id: 4,
    type: "warning",
    title: "Elevated Heart Rate",
    worker: "WKR-005",
    zone: "C1",
    time: "10:30 AM",
    category: "Health"
  },
  {
    id: 5,
    type: "warning",
    title: "Low Battery",
    worker: "WKR-004",
    zone: "B2",
    time: "10:27 AM",
    category: "Device"
  },
  {
    id: 6,
    type: "critical",
    title: "Environmental Hazard",
    worker: "Sensor Network",
    zone: "Exit A",
    time: "10:24 AM",
    category: "Environment"
  }
];

function AlertIcon({ category }) {

  if (category === "Health") {
    return <HeartPulse size={18} />;
  }

  if (category === "Communication") {
    return <Radio size={18} />;
  }

  if (category === "Environment") {
    return <Wind size={18} />;
  }

  if (category === "SOS") {
    return <BellRing size={18} />;
  }

  return <TriangleAlert size={18} />;
}

export default function Alerts() {

  return (
    <PageLayout
      eyebrow="SAFETY EVENTS"
      title="Alerts"
      subtitle="Review worker, environmental and communication safety events"
    >

      <div className="alert-summary-grid">

        <div className="card">
          <span>Critical</span>
          <strong className="summary-critical">
            4
          </strong>
        </div>

        <div className="card">
          <span>Warnings</span>
          <strong className="summary-warning">
            2
          </strong>
        </div>

        <div className="card">
          <span>Total Events</span>
          <strong>
            6
          </strong>
        </div>

      </div>

      <section className="alerts-page-card card">

        <div className="section-heading compact">

          <div>
            <p className="section-label">
              EVENT LOG
            </p>

            <h2>
              Recent Safety Alerts
            </h2>
          </div>

        </div>

        <div className="full-alert-list">

          {alertHistory.map(alert => (

            <div
              key={alert.id}
              className={`full-alert-item ${alert.type}`}
            >

              <div className="full-alert-icon">
                <AlertIcon
                  category={alert.category}
                />
              </div>

              <div className="full-alert-main">

                <strong>
                  {alert.title}
                </strong>

                <span>
                  {alert.worker} · Zone {alert.zone}
                </span>

              </div>

              <span className="alert-category">
                {alert.category}
              </span>

              <time>
                {alert.time}
              </time>

            </div>

          ))}

        </div>

      </section>

    </PageLayout>
  );
}