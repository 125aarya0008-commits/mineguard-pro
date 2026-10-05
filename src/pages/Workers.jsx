import { useState } from "react";

import {
  Search,
  HeartPulse,
  MapPin,
  Battery,
  Radio
} from "lucide-react";

import PageLayout from "../components/PageLayout";

import {
  workers
} from "../data/mockData";

export default function Workers() {

  const [search, setSearch] =
    useState("");

  const [selectedWorker, setSelectedWorker] =
    useState(workers[0]);

  const filteredWorkers =
    workers.filter(worker =>
      worker.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      worker.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      worker.zone
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <PageLayout
      eyebrow="PERSONNEL MANAGEMENT"
      title="Workers"
      subtitle="Monitor and manage connected mine workers"
    >

      <div className="worker-page-toolbar card">

        <div className="worker-search">

          <Search size={17} />

          <input
            placeholder="Search worker, ID or zone..."
            value={search}
            onChange={e =>
              setSearch(e.target.value)
            }
          />

        </div>

        <span>
          {filteredWorkers.length} workers
        </span>

      </div>

      <div className="workers-page-layout">

        <section className="worker-directory card">

          <div className="section-heading compact">

            <div>
              <p className="section-label">
                CONNECTED PERSONNEL
              </p>

              <h2>
                Worker Directory
              </h2>
            </div>

          </div>

          <div className="worker-directory-list">

            {filteredWorkers.map(worker => (

              <button
                key={worker.id}
                className={`worker-directory-item ${
                  selectedWorker.id === worker.id
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedWorker(worker)
                }
              >

                <div className="worker-directory-avatar">
                  {worker.name.charAt(0)}
                </div>

                <div className="worker-directory-info">

                  <strong>
                    {worker.name}
                  </strong>

                  <span>
                    {worker.id} · Zone {worker.zone}
                  </span>

                </div>

                <span
                  className={`status-badge ${
                    worker.lost
                      ? "lost"
                      : worker.status
                  }`}
                >
                  <span></span>

                  {worker.lost
                    ? "lost"
                    : worker.status}
                </span>

              </button>

            ))}

          </div>

        </section>

        <section className="worker-profile-page card">

          <div className="profile-main">

            <div className="profile-large-avatar">
              {selectedWorker.name.charAt(0)}
            </div>

            <div>
              <span>
                {selectedWorker.id}
              </span>

              <h2>
                {selectedWorker.name}
              </h2>

              <p>
                Underground Worker
              </p>
            </div>

          </div>

          <div className="worker-profile-grid">

            <div>
              <HeartPulse />
              <span>Heart Rate</span>
              <strong>
                {selectedWorker.heartRate} BPM
              </strong>
            </div>

            <div>
              <HeartPulse />
              <span>SpO₂</span>
              <strong>
                {selectedWorker.spo2}%
              </strong>
            </div>

            <div>
              <MapPin />
              <span>Current Zone</span>
              <strong>
                {selectedWorker.zone}
              </strong>
            </div>

            <div>
              <Battery />
              <span>Battery</span>
              <strong>
                {selectedWorker.battery}%
              </strong>
            </div>

            <div>
              <Radio />
              <span>Connection</span>
              <strong>
                {selectedWorker.online
                  ? "Online"
                  : "Offline"}
              </strong>
            </div>

          </div>

        </section>

      </div>

    </PageLayout>
  );
}