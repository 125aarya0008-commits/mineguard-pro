import Sidebar from "./Sidebar";

export default function PageLayout({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">

        <div className="page-header">
          <div>
            <p className="eyebrow">
              {eyebrow}
            </p>

            <h1>{title}</h1>

            <p className="header-subtitle">
              {subtitle}
            </p>
          </div>

          <div className="page-system-status">
            <span></span>
            System Operational
          </div>
        </div>

        <div className="dashboard-body">
          {children}
        </div>

      </main>
    </div>
  );
}