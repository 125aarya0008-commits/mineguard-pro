import {
  FileText,
  HeartPulse,
  Wind,
  Users,
  MapPin
} from "lucide-react";

import PageLayout from "../components/PageLayout";

const reports = [
  {
    title: "Worker Health Report",
    description:
      "Heart rate, SpO₂, temperature and fall monitoring records.",
    icon: HeartPulse
  },
  {
    title: "Environmental Safety Report",
    description:
      "Gas, temperature, humidity and air-quality monitoring records.",
    icon: Wind
  },
  {
    title: "Worker Attendance Report",
    description:
      "Connected workers and underground deployment records.",
    icon: Users
  },
  {
    title: "Location & Navigation Report",
    description:
      "Worker zones, last-known locations and evacuation routes.",
    icon: MapPin
  },
  {
    title: "Complete Mine Safety Report",
    description:
      "Combined worker, environment, alerts and navigation summary.",
    icon: FileText
  }
];

export default function Reports() {

  const printReport = () => {
    window.print();
  };

  return (
    <PageLayout
      eyebrow="DOCUMENTATION"
      title="Reports"
      subtitle="Generate mine safety and worker monitoring reports"
    >

      <div className="reports-grid">

        {reports.map(
          ({
            title,
            description,
            icon: Icon
          }) => (

            <div
              className="report-card card"
              key={title}
            >

              <div className="report-icon">
                <Icon size={22} />
              </div>

              <h3>
                {title}
              </h3>

              <p>
                {description}
              </p>

              <button
                onClick={printReport}
              >
                Generate Report
              </button>

            </div>

          )
        )}

      </div>

    </PageLayout>
  );
}