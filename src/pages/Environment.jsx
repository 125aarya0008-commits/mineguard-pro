import {
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  ShieldCheck
} from "lucide-react";

import PageLayout from "../components/PageLayout";

import {
  environment
} from "../data/mockData";

export default function Environment() {

  const readings = [
    {
      label: "Gas / Air Sensor",
      value: environment.gasLevel,
      unit: "raw",
      icon: Wind,
      status: "Safe"
    },
    {
      label: "Mine Temperature",
      value: environment.temperature,
      unit: "°C",
      icon: Thermometer,
      status: "Normal"
    },
    {
      label: "Humidity",
      value: environment.humidity,
      unit: "%",
      icon: Droplets,
      status: "Normal"
    },
    {
      label: "Air Quality",
      value: environment.airQuality,
      unit: "",
      icon: Leaf,
      status: "Good"
    }
  ];

  return (
    <PageLayout
      eyebrow="ENVIRONMENTAL SAFETY"
      title="Mine Environment"
      subtitle="Monitor underground atmospheric and environmental conditions"
    >

      <div className="environment-page-grid">

        {readings.map(
          ({
            label,
            value,
            unit,
            icon: Icon,
            status
          }) => (

            <div
              className="environment-monitor-card card"
              key={label}
            >

              <div className="environment-monitor-icon">
                <Icon size={23} />
              </div>

              <span>
                {label}
              </span>

              <div>
                <strong>
                  {value}
                </strong>

                <small>
                  {unit}
                </small>
              </div>

              <p>
                <i></i>
                {status}
              </p>

            </div>

          )
        )}

      </div>

      <section className="environment-overview card">

        <div className="environment-safe-icon">
          <ShieldCheck size={32} />
        </div>

        <div>
          <p className="section-label">
            CURRENT MINE STATUS
          </p>

          <h2>
            Environment Safe
          </h2>

          <p>
            All monitored environmental
            parameters are currently within
            configured safety limits.
          </p>
        </div>

      </section>

      <section className="sensor-zone-card card">

        <div className="section-heading compact">
          <div>
            <p className="section-label">
              SENSOR NETWORK
            </p>

            <h2>
              Underground Monitoring Zones
            </h2>
          </div>
        </div>

        <div className="sensor-zone-grid">

          {[
            "Zone A1",
            "Zone A2",
            "Zone B1",
            "Zone B2",
            "Zone C1",
            "Zone C2"
          ].map((zone, index) => (

            <div key={zone}>
              <span>
                Sensor Node {index + 1}
              </span>

              <strong>
                {zone}
              </strong>

              <small>
                ● Online
              </small>
            </div>

          ))}

        </div>

      </section>

    </PageLayout>
  );
}