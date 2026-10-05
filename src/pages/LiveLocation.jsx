import { useState } from "react";

import PageLayout from "../components/PageLayout";
import MineMap from "../components/MineMap";
import WorkerDetails from "../components/WorkerDetails";

import {
  workers
} from "../data/mockData";

export default function LiveLocation() {

  const [selectedWorker, setSelectedWorker] =
    useState(workers[0]);

  const [showRoute, setShowRoute] =
    useState(false);

  const [hazardActive, setHazardActive] =
    useState(false);

  const selectWorker = worker => {
    setSelectedWorker(worker);
    setShowRoute(false);
  };

  return (
    <PageLayout
      eyebrow="UNDERGROUND NAVIGATION"
      title="Live Worker Location"
      subtitle="Track individual workers and calculate safe evacuation routes"
    >

      <div className="location-page-controls card">

        <div>

          <span className="section-label">
            TRACKING
          </span>

          <strong>
            Select Worker
          </strong>

        </div>

        <select
          value={selectedWorker.id}
          onChange={e => {
            const worker =
              workers.find(
                item =>
                  item.id === e.target.value
              );

            selectWorker(worker);
          }}
        >

          {workers.map(worker => (
            <option
              key={worker.id}
              value={worker.id}
            >
              {worker.id} — {worker.name}
            </option>
          ))}

        </select>

        <button
          className={
            hazardActive
              ? "hazard-toggle active"
              : "hazard-toggle"
          }
          onClick={() =>
            setHazardActive(
              !hazardActive
            )
          }
        >
          {hazardActive
            ? "Clear Hazard"
            : "Simulate Blocked Exit"}
        </button>

      </div>

      <div className="location-layout">

        <MineMap
          workers={workers}
          selectedWorker={selectedWorker}
          setSelectedWorker={selectWorker}
          showRoute={showRoute}
          hazardActive={hazardActive}
        />

        <WorkerDetails
          worker={selectedWorker}
          showRoute={showRoute}
          setShowRoute={setShowRoute}
        />

      </div>

    </PageLayout>
  );
}