import {
  HeartPulse,
  Activity,
  Thermometer,
  Battery,
  MapPin,
  Radio,
  TriangleAlert
} from "lucide-react";

export default function WorkerDetails({
  worker,
  showRoute,
  setShowRoute
}) {

  const displayedStatus = worker.lost
    ? "lost"
    : worker.status;

  return (
    <section className="worker-details card">

      <div className="worker-profile">

        <div className="large-avatar">
          {worker.name.charAt(0)}
        </div>

        <div>

          <span className="worker-id">
            {worker.id}
          </span>

          <h3>{worker.name}</h3>

          <span
            className={`status-badge ${displayedStatus}`}
          >
            <span></span>
            {displayedStatus}
          </span>

        </div>

      </div>

      {worker.sos && (
        <div className="worker-critical-message">
          <TriangleAlert size={17} />
          SOS ACTIVATED
        </div>
      )}

      {worker.fall && (
        <div className="worker-critical-message">
          <TriangleAlert size={17} />
          FALL DETECTED
        </div>
      )}

      {worker.lost && (
        <div className="worker-lost-message">
          <Radio size={17} />
          COMMUNICATION LOST
          <small>
            Showing last known location
          </small>
        </div>
      )}

      <div className="detail-list">

        <div>
          <HeartPulse size={17} />
          <span>Heart Rate</span>
          <strong>
            {worker.lost
              ? "Last: " + worker.heartRate + " BPM"
              : worker.heartRate + " BPM"}
          </strong>
        </div>

        <div>
          <Activity size={17} />
          <span>SpO₂</span>
          <strong>
            {worker.spo2}%
          </strong>
        </div>

        <div>
          <Thermometer size={17} />
          <span>Body Temp</span>
          <strong>
            {worker.bodyTemp}°C
          </strong>
        </div>

        <div>
          <MapPin size={17} />
          <span>
            {worker.lost
              ? "Last Known Zone"
              : "Current Zone"}
          </span>

          <strong>
            {worker.zone}
          </strong>
        </div>

        <div>
          <Battery size={17} />
          <span>Battery</span>
          <strong>
            {worker.battery}%
          </strong>
        </div>

        <div>
          <Radio size={17} />
          <span>Connection</span>

          <strong>
            {worker.lost
              ? "Signal Lost"
              : worker.online
              ? "Online"
              : "Offline"}
          </strong>
        </div>

      </div>

      <button
        className="route-button"
        onClick={() =>
          setShowRoute(!showRoute)
        }
      >
        {showRoute
          ? "Hide Safe Route"
          : worker.lost
          ? "Show Rescue Route"
          : "Show Safe Route"}
      </button>

    </section>
  );
}