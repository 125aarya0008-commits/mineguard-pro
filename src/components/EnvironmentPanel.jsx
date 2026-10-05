import {
  Wind,
  Thermometer,
  Droplets,
  Leaf
} from "lucide-react";

export default function EnvironmentPanel({ environment }) {
  const items = [
    {
      label: "Gas / Air Quality",
      value: environment.gasLevel,
      unit: "raw",
      icon: Wind
    },
    {
      label: "Temperature",
      value: environment.temperature,
      unit: "°C",
      icon: Thermometer
    },
    {
      label: "Humidity",
      value: environment.humidity,
      unit: "%",
      icon: Droplets
    },
    {
      label: "Air Quality",
      value: environment.airQuality,
      unit: "",
      icon: Leaf
    }
  ];

  return (
    <section className="environment-card card">
      <div className="section-heading compact">
        <div>
          <p className="section-label">MINE CONDITIONS</p>
          <h2>Environment</h2>
        </div>

        <span className="safe-badge">Safe</span>
      </div>

      <div className="environment-grid">
        {items.map(({ label, value, unit, icon: Icon }) => (
          <div className="environment-item" key={label}>
            <div className="environment-icon">
              <Icon size={18} strokeWidth={1.7} />
            </div>

            <div>
              <span className="environment-label">{label}</span>

              <div>
                <strong>{value}</strong>
                <small>{unit}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}