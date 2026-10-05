import PageLayout from "../components/PageLayout";

const events = [
  {
    time: "10:34 AM",
    event: "Emergency SOS activated",
    source: "WKR-006",
    type: "Critical"
  },
  {
    time: "10:32 AM",
    event: "Communication signal lost",
    source: "WKR-002",
    type: "Critical"
  },
  {
    time: "10:31 AM",
    event: "Fall detected",
    source: "WKR-003",
    type: "Critical"
  },
  {
    time: "10:30 AM",
    event: "Elevated heart rate",
    source: "WKR-005",
    type: "Warning"
  },
  {
    time: "10:27 AM",
    event: "Low wearable battery",
    source: "WKR-004",
    type: "Warning"
  },
  {
    time: "10:24 AM",
    event: "Gas level increased",
    source: "Zone C",
    type: "Warning"
  }
];

export default function History() {

  return (
    <PageLayout
      eyebrow="SYSTEM RECORDS"
      title="History"
      subtitle="Review previous monitoring and safety events"
    >

      <section className="history-card card">

        <div className="section-heading compact">
          <div>
            <p className="section-label">
              EVENT TIMELINE
            </p>

            <h2>
              Monitoring History
            </h2>
          </div>
        </div>

        <div className="history-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
                <th>Source</th>
                <th>Severity</th>
              </tr>
            </thead>

            <tbody>

              {events.map(
                (event, index) => (

                  <tr key={index}>

                    <td>
                      {event.time}
                    </td>

                    <td>
                      {event.event}
                    </td>

                    <td>
                      {event.source}
                    </td>

                    <td>

                      <span
                        className={
                          event.type ===
                          "Critical"
                            ? "history-critical"
                            : "history-warning"
                        }
                      >
                        {event.type}
                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>

    </PageLayout>
  );
}