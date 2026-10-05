export default function WorkerTable({
  workers,
  selectedWorker,
  setSelectedWorker
}) {

  return (
    <section className="worker-table-card card">

      <div className="section-heading compact">

        <div>
          <p className="section-label">
            PERSONNEL
          </p>

          <h2>Worker Status</h2>
        </div>

        <span className="worker-count">
          {workers.length} Workers
        </span>

      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Worker</th>
              <th>Heart Rate</th>
              <th>SpO₂</th>
              <th>Zone</th>
              <th>Battery</th>
              <th>Status</th>
              <th>SOS</th>
            </tr>
          </thead>

          <tbody>

            {workers.map((worker) => {

              const displayStatus =
                worker.lost
                  ? "lost"
                  : worker.status;

              return (
                <tr
                  key={worker.id}
                  onClick={() =>
                    setSelectedWorker(worker)
                  }
                  className={
                    selectedWorker.id === worker.id
                      ? "selected-row"
                      : ""
                  }
                >

                  <td>
                    <div className="worker-cell">

                      <div className="worker-avatar">
                        {worker.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {worker.name}
                        </strong>

                        <span>
                          {worker.id}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>
                    {worker.heartRate} BPM
                  </td>

                  <td>
                    {worker.spo2}%
                  </td>

                  <td>
                    {worker.zone}
                  </td>

                  <td>
                    {worker.battery}%
                  </td>

                  <td>
                    <span
                      className={`status-badge ${displayStatus}`}
                    >
                      <span></span>
                      {displayStatus}
                    </span>
                  </td>

                  <td>
                    {worker.sos ? (
                      <span className="sos-table-badge">
                        SOS
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}