import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HealthPanel from "../components/HealthPanel";
import EnvironmentPanel from "../components/EnvironmentPanel";
import WorkerTable from "../components/WorkerTable";
import MineMap from "../components/MineMap";
import WorkerDetails from "../components/WorkerDetails";
import HealthChart from "../components/HealthChart";
import AlertsPanel from "../components/AlertsPanel";
import EmergencyOverlay from "../components/EmergencyOverlay";

import {
  workers as initialWorkers,
  environment,
  alerts as initialAlerts,
  healthHistory
} from "../data/mockData";

export default function Dashboard() {

  const [workers, setWorkers] =
    useState(initialWorkers);

  const [selectedWorkerId, setSelectedWorkerId] =
    useState("WKR-001");

  const [alerts, setAlerts] =
    useState(initialAlerts);

  const [emergency, setEmergency] =
    useState(false);

  const [emergencyType, setEmergencyType] =
    useState(null);

  const [showRoute, setShowRoute] =
    useState(false);

  const [hazardActive, setHazardActive] =
    useState(false);

  const selectedWorker =
    workers.find(
      worker =>
        worker.id === selectedWorkerId
    ) || workers[0];

  const setSelectedWorker = (worker) => {
    setSelectedWorkerId(worker.id);
    setShowRoute(false);
  };

  const addAlert = (
    type,
    message,
    workerId
  ) => {

    const newAlert = {
      id: Date.now(),
      type,
      message,
      worker: workerId,
      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      )
    };

    setAlerts(prev => [
      newAlert,
      ...prev
    ]);
  };

  const simulateSOS = () => {

    const targetId = "WKR-006";

    setWorkers(prev =>
      prev.map(worker =>
        worker.id === targetId
          ? {
              ...worker,
              sos: true,
              status: "critical",
              lost: false,
              online: true
            }
          : worker
      )
    );

    setSelectedWorkerId(targetId);

    setEmergency(true);
    setEmergencyType("sos");
    setHazardActive(false);
    setShowRoute(true);

    addAlert(
      "critical",
      "Emergency SOS activated",
      targetId
    );
  };

  const simulateFall = () => {

    const targetId = "WKR-003";

    setWorkers(prev =>
      prev.map(worker =>
        worker.id === targetId
          ? {
              ...worker,
              fall: true,
              status: "critical",
              lost: false,
              online: true
            }
          : worker
      )
    );

    setSelectedWorkerId(targetId);

    setEmergency(true);
    setEmergencyType("fall");
    setHazardActive(false);
    setShowRoute(true);

    addAlert(
      "critical",
      "Fall detected",
      targetId
    );
  };

  const simulateLostWorker = () => {

    const targetId = "WKR-002";

    setWorkers(prev =>
      prev.map(worker =>
        worker.id === targetId
          ? {
              ...worker,
              online: false,
              lost: true,
              sos: false,
              fall: false
            }
          : worker
      )
    );

    setSelectedWorkerId(targetId);

    setEmergency(true);
    setEmergencyType("lost");
    setHazardActive(false);
    setShowRoute(true);

    addAlert(
      "critical",
      "Worker communication lost",
      targetId
    );
  };

  const simulateHazard = () => {

    setHazardActive(true);

    setEmergency(true);
    setEmergencyType("environment");
    setShowRoute(true);

    addAlert(
      "critical",
      "Environmental hazard detected near Exit A",
      selectedWorker.id
    );
  };

  const resetSimulation = () => {

    setWorkers(initialWorkers);

    setAlerts(initialAlerts);

    setEmergency(false);

    setEmergencyType(null);

    setHazardActive(false);

    setShowRoute(false);

    setSelectedWorkerId("WKR-001");
  };

  const stopEmergency = () => {
    setEmergency(false);
  };

  const safeCount =
    workers.filter(
      worker =>
        worker.status === "safe" &&
        !worker.lost
    ).length;

  const warningCount =
    workers.filter(
      worker =>
        worker.status === "warning" &&
        !worker.lost
    ).length;

  const criticalCount =
    workers.filter(
      worker =>
        worker.status === "critical" &&
        !worker.lost
    ).length;

  const lostCount =
    workers.filter(
      worker => worker.lost
    ).length;

  return (
    <div
      className={`dashboard ${
        emergency
          ? "emergency-mode"
          : ""
      }`}
    >

      <Sidebar />

      <main className="main-content">

        <EmergencyOverlay
          emergency={emergency}
          emergencyType={emergencyType}
          worker={selectedWorker}
          stopEmergency={stopEmergency}
        />

        <Header
          emergency={emergency}
        />

        <div className="dashboard-body">

          <div className="summary-strip card">

            <div>
              <span>Total Workers</span>
              <strong>
                {workers.length}
              </strong>
            </div>

            <div>
              <span>Safe</span>
              <strong className="summary-safe">
                {safeCount}
              </strong>
            </div>

            <div>
              <span>Warning</span>
              <strong className="summary-warning">
                {warningCount}
              </strong>
            </div>

            <div>
              <span>Critical</span>
              <strong className="summary-critical">
                {criticalCount}
              </strong>
            </div>

            <div>
              <span>Lost</span>
              <strong className="summary-lost">
                {lostCount}
              </strong>
            </div>

          </div>

          <HealthPanel
            worker={selectedWorker}
          />

          <EnvironmentPanel
            environment={environment}
          />

          <WorkerTable
            workers={workers}
            selectedWorker={selectedWorker}
            setSelectedWorker={setSelectedWorker}
          />

          <div className="location-layout">

            <MineMap
              workers={workers}
              selectedWorker={selectedWorker}
              setSelectedWorker={setSelectedWorker}
              showRoute={showRoute}
              hazardActive={hazardActive}
            />

            <WorkerDetails
              worker={selectedWorker}
              showRoute={showRoute}
              setShowRoute={setShowRoute}
            />

          </div>

          <div className="analytics-layout">

            <HealthChart
              worker={selectedWorker}
              healthHistory={healthHistory}
            />

            <AlertsPanel
              alerts={alerts}
            />

          </div>

          <div className="demo-controls card">

            <div>
              <span className="section-label">
                DEMONSTRATION CONTROLS
              </span>

              <strong>
                MineGuard Emergency Simulator
              </strong>
            </div>

            <div className="simulation-buttons">

              <button
                className="simulation-btn sos"
                onClick={simulateSOS}
              >
                Simulate SOS
              </button>

              <button
                className="simulation-btn fall"
                onClick={simulateFall}
              >
                Simulate Fall
              </button>

              <button
                className="simulation-btn lost"
                onClick={simulateLostWorker}
              >
                Lose Worker Signal
              </button>

              <button
                className="simulation-btn hazard"
                onClick={simulateHazard}
              >
                Simulate Hazard
              </button>

              <button
                className="simulation-btn reset"
                onClick={resetSimulation}
              >
                Reset
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}