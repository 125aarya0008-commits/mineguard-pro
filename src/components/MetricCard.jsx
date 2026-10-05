export default function MetricCard({
  title,
  value,
  unit,
  icon: Icon,
  status = "Normal"
}) {
  return (
    <div className="metric-card card">
      <div className="metric-header">
        <Icon size={18} strokeWidth={1.7} />
        <span>{title}</span>
      </div>

      <div>
        <span className="metric-value">{value}</span>
        <span className="metric-unit">{unit}</span>
      </div>

      <div className="metric-status">
        <span className="safe-dot"></span>
        {status}
      </div>

      <div className="mini-wave">
        <span></span>
      </div>
    </div>
  );
}