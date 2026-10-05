const positions = {
  "WKR-001": { x: 140, y: 135 },
  "WKR-002": { x: 340, y: 135 },
  "WKR-003": { x: 555, y: 135 },
  "WKR-004": { x: 205, y: 330 },
  "WKR-005": { x: 420, y: 330 },
  "WKR-006": { x: 675, y: 330 }
};

const routes = {
  A1: "M140 135 H340 H555 L735 70",
  A2: "M340 135 H555 L735 70",
  B1: "M555 135 L735 70",
  B2: "M205 330 H420 L340 135 H555 L735 70",
  C1: "M420 330 L340 135 H555 L735 70",
  C2: "M675 330 L555 135 L735 70"
};

const hazardRoutes = {
  A1: "M140 135 L205 330 H420 H675 L760 405",
  A2: "M340 135 L420 330 H675 L760 405",
  B1: "M555 135 L675 330 L760 405",
  B2: "M205 330 H420 H675 L760 405",
  C1: "M420 330 H675 L760 405",
  C2: "M675 330 L760 405"
};

export default function MineMap({
  workers,
  selectedWorker,
  setSelectedWorker,
  showRoute,
  hazardActive
}) {

  const routePath = hazardActive
    ? hazardRoutes[selectedWorker.zone]
    : routes[selectedWorker.zone];

  return (
    <section className="mine-map-card card">

      <div className="section-heading compact">

        <div>
          <p className="section-label">
            UNDERGROUND NETWORK
          </p>

          <h2>Live Mine Map</h2>
        </div>

        <div className="map-legend">
          <span>
            <i className="legend-safe"></i>
            Safe
          </span>

          <span>
            <i className="legend-warning"></i>
            Warning
          </span>

          <span>
            <i className="legend-danger"></i>
            Critical
          </span>

          <span>
            <i className="legend-lost"></i>
            Lost
          </span>
        </div>

      </div>

      {hazardActive && (
        <div className="map-hazard-notice">
          Hazard detected near Exit A · Routes recalculated to Exit B
        </div>
      )}

      <div className="mine-map">

        <svg
          viewBox="0 0 820 470"
          className="mine-svg"
        >

          <defs>
            <linearGradient
              id="routeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#14b8a6"
              />

              <stop
                offset="100%"
                stopColor="#06b6d4"
              />
            </linearGradient>
          </defs>

          <path
            className="mine-tunnel"
            d="M140 135 H555"
          />

          <path
            className="mine-tunnel"
            d="M205 330 H675"
          />

          <path
            className="mine-tunnel"
            d="M140 135 L205 330"
          />

          <path
            className="mine-tunnel"
            d="M340 135 L420 330"
          />

          <path
            className="mine-tunnel"
            d="M555 135 L675 330"
          />

          <path
            className={
              hazardActive
                ? "mine-tunnel hazard-tunnel"
                : "mine-tunnel"
            }
            d="M555 135 L735 70"
          />

          <path
            className="mine-tunnel"
            d="M675 330 L760 405"
          />

          {showRoute && routePath && (
            <path
              className="safe-route"
              d={routePath}
            />
          )}

          {hazardActive && (
            <g className="hazard-zone">
              <circle
                cx="650"
                cy="105"
                r="44"
              />

              <text
                x="621"
                y="110"
              >
                HAZARD
              </text>
            </g>
          )}

          <g className="exit-point">
            <circle
              cx="735"
              cy="70"
              r="13"
            />

            <text
              x="700"
              y="45"
            >
              EXIT A
            </text>
          </g>

          <g className="exit-point">
            <circle
              cx="760"
              cy="405"
              r="13"
            />

            <text
              x="720"
              y="440"
            >
              EXIT B
            </text>
          </g>

          {workers.map((worker) => {

            const position = positions[worker.id];

            if (!position) return null;

            const isSelected =
              selectedWorker.id === worker.id;

            const markerStatus =
              worker.lost
                ? "lost"
                : worker.status;

            return (
              <g
                key={worker.id}
                className={`worker-marker ${markerStatus} ${
                  isSelected
                    ? "selected-marker"
                    : ""
                }`}
                onClick={() =>
                  setSelectedWorker(worker)
                }
              >

                {isSelected && (
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="25"
                    className="marker-ring"
                  />
                )}

                <circle
                  cx={position.x}
                  cy={position.y}
                  r="11"
                  className="marker-dot"
                />

                <text
                  x={position.x + 17}
                  y={position.y + 5}
                >
                  {worker.id}
                </text>

                {worker.lost && (
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="31"
                    className="lost-ring"
                  />
                )}

              </g>
            );
          })}

        </svg>

      </div>

    </section>
  );
}