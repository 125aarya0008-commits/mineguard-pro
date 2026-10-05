import { useState } from "react";

import PageLayout from "../components/PageLayout";

export default function Settings() {

  const [settings, setSettings] =
    useState({
      minHeartRate: 60,
      maxHeartRate: 100,
      minSpo2: 95,
      maxTemperature: 37.5,
      gasThreshold: 600,
      emergencyFlash: true,
      soundAlert: true,
      autoRoute: true
    });

  const updateSetting = (
    key,
    value
  ) => {

    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <PageLayout
      eyebrow="SYSTEM CONFIGURATION"
      title="Settings"
      subtitle="Configure MineGuard safety thresholds and emergency behaviour"
    >

      <section className="settings-card card">

        <div className="section-heading compact">
          <div>
            <p className="section-label">
              HEALTH THRESHOLDS
            </p>

            <h2>
              Worker Safety Limits
            </h2>
          </div>
        </div>

        <div className="settings-grid">

          <label>
            Minimum Heart Rate
            <input
              type="number"
              value={
                settings.minHeartRate
              }
              onChange={e =>
                updateSetting(
                  "minHeartRate",
                  e.target.value
                )
              }
            />
            <span>BPM</span>
          </label>

          <label>
            Maximum Heart Rate
            <input
              type="number"
              value={
                settings.maxHeartRate
              }
              onChange={e =>
                updateSetting(
                  "maxHeartRate",
                  e.target.value
                )
              }
            />
            <span>BPM</span>
          </label>

          <label>
            Minimum SpO₂
            <input
              type="number"
              value={
                settings.minSpo2
              }
              onChange={e =>
                updateSetting(
                  "minSpo2",
                  e.target.value
                )
              }
            />
            <span>%</span>
          </label>

          <label>
            Maximum Body Temperature
            <input
              type="number"
              step="0.1"
              value={
                settings.maxTemperature
              }
              onChange={e =>
                updateSetting(
                  "maxTemperature",
                  e.target.value
                )
              }
            />
            <span>°C</span>
          </label>

          <label>
            Gas Alert Threshold
            <input
              type="number"
              value={
                settings.gasThreshold
              }
              onChange={e =>
                updateSetting(
                  "gasThreshold",
                  e.target.value
                )
              }
            />
            <span>raw</span>
          </label>

        </div>

      </section>

      <section className="settings-card card">

        <div className="section-heading compact">

          <div>
            <p className="section-label">
              EMERGENCY SYSTEM
            </p>

            <h2>
              Alert Behaviour
            </h2>
          </div>

        </div>

        <div className="toggle-settings">

          <label>

            <div>
              <strong>
                Emergency Screen Flash
              </strong>

              <span>
                Flash dashboard red during
                critical events
              </span>
            </div>

            <input
              type="checkbox"
              checked={
                settings.emergencyFlash
              }
              onChange={e =>
                updateSetting(
                  "emergencyFlash",
                  e.target.checked
                )
              }
            />

          </label>

          <label>

            <div>
              <strong>
                Audible Emergency Alert
              </strong>

              <span>
                Trigger alarm during SOS
                and critical events
              </span>
            </div>

            <input
              type="checkbox"
              checked={
                settings.soundAlert
              }
              onChange={e =>
                updateSetting(
                  "soundAlert",
                  e.target.checked
                )
              }
            />

          </label>

          <label>

            <div>
              <strong>
                Automatic Safe Routing
              </strong>

              <span>
                Recalculate evacuation
                route when hazards appear
              </span>
            </div>

            <input
              type="checkbox"
              checked={
                settings.autoRoute
              }
              onChange={e =>
                updateSetting(
                  "autoRoute",
                  e.target.checked
                )
              }
            />

          </label>

        </div>

      </section>

    </PageLayout>
  );
}