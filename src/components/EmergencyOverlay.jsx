import {
  Siren,
  TriangleAlert,
  Radio
} from "lucide-react";

export default function EmergencyOverlay({
  emergency,
  emergencyType,
  worker,
  stopEmergency
}) {

  if (!emergency) return null;

  const emergencyText =
    emergencyType === "fall"
      ? "FALL DETECTED"
      : emergencyType === "lost"
      ? "WORKER COMMUNICATION LOST"
      : emergencyType === "environment"
      ? "ENVIRONMENTAL HAZARD DETECTED"
      : "EMERGENCY SOS ACTIVATED";

  const Icon =
    emergencyType === "lost"
      ? Radio
      : emergencyType === "fall"
      ? TriangleAlert
      : Siren;

  return (
    <div className="emergency-banner">

      <div className="emergency-message">

        <Icon size={20} />

        <div>

          <strong>
            {emergencyText}
          </strong>

          <span>
            {worker.id} · {worker.name} · Zone {worker.zone}
          </span>

        </div>

      </div>

      <button onClick={stopEmergency}>
        Acknowledge Alert
      </button>

    </div>
  );
}