import {
  LayoutDashboard,
  Users,
  HeartPulse,
  Wind,
  Map,
  Bell,
  FileText,
  History,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },
  {
    name: "Workers",
    path: "/workers",
    icon: Users
  },
  {
    name: "Health",
    path: "/health",
    icon: HeartPulse
  },
  {
    name: "Environment",
    path: "/environment",
    icon: Wind
  },
  {
    name: "Live Location",
    path: "/location",
    icon: Map
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: Bell
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText
  },
  {
    name: "History",
    path: "/history",
    icon: History
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings
  }
];

export default function Sidebar() {

  return (
    <aside className="sidebar">

      <div className="brand">

        <div className="brand-icon">
          M
        </div>

        <div>
          <h2>MineGuard</h2>
          <span>PRO</span>
        </div>

      </div>

      <nav className="sidebar-nav">

        {menuItems.map(
          ({ name, path, icon: Icon }) => (

            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `nav-item ${
                  isActive ? "active" : ""
                }`
              }
            >

              <Icon
                size={20}
                strokeWidth={1.7}
              />

              <span>
                {name}
              </span>

            </NavLink>

          )
        )}

      </nav>

    
    </aside>
  );
}