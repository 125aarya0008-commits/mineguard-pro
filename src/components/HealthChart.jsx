import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";

export default function HealthChart({
  worker,
  healthHistory
}) {
  const data = healthHistory[worker.id] || [];

  return (
    <section className="health-chart card">

      <div className="section-heading compact">
        <div>
          <p className="section-label">
            REAL-TIME TREND
          </p>

          <h2>
            Health Trends · {worker.id}
          </h2>
        </div>

        <span className="chart-live">
          <i></i>
          Live
        </span>
      </div>

      <div className="chart-container">

        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eef2f7"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="hr"
              domain={[55, 110]}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="spo2"
              orientation="right"
              domain={[85, 100]}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Legend />

            <Line
              yAxisId="hr"
              type="monotone"
              dataKey="heartRate"
              name="Heart Rate"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={false}
            />

            <Line
              yAxisId="spo2"
              type="monotone"
              dataKey="spo2"
              name="SpO₂"
              stroke="#14b8a6"
              strokeWidth={2}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </section>
  );
}