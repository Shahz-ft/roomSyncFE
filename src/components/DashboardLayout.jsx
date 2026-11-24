import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DashboardLayout = ({ children, role = "resident" }) => {
  const navigate = useNavigate();

  const menuItems = {
    resident: [
      { name: "Dashboard", path: "/resident/dashboard", icon: "▦" },
      { name: "My Accommodation", path: "/resident/accommodation", icon: "⌂" },
      { name: "Rent & Expenses", path: "/resident/expenses", icon: "₹" },
      { name: "Complaints", path: "/resident/complaints", icon: "⚒" },
      { name: "Notices", path: "/resident/notices", icon: "▤" },
    ],
    manager: [
      { name: "Dashboard", path: "/manager/dashboard", icon: "▦" },
      { name: "My Property", path: "/manager/property", icon: "⌂" },
      { name: "Rent & Bills", path: "/manager/bills", icon: "₹" },
      { name: "Complaints", path: "/manager/complaints", icon: "⚒" },
      { name: "Notices", path: "/manager/notices", icon: "▤" },
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: "▦" },
      {
        name: "User Management",
        path: "/admin/users",
        icon: "👥",
      },
      {
        name: "Property Management",
        path: "/admin/properties",
        icon: "🏢",
      },
      {
        name: "Verifications",
        path: "/admin/verifications",
        icon: "🛡️",
      },
    ],
  };

  const currentMenu = menuItems[role] || menuItems.resident;

  const roleLabels = {
    resident: "Resident",
    manager: "Property Manager",
    admin: "Platform Admin",
  };

  const roleNames = {
    resident: "Shahana",
    manager: "Property Manager",
    admin: "Admin",
  };

  return (
    <div className="flex min-h-screen bg-[#F8F5FA]">
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-[#EFE5F2] bg-white">
        <Link
          to="/"
          className="flex items-center gap-3  border-[#F1EAF3] px-6 py-7"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXcmah9tqwj2bTzvO2QBP8rvdJZ1oqxJQbkFW26YcRQ&s=10"
            alt="RoomSync"
            className="h-8 w-8 object-contain"
          />

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#493951]">
              Room<span className="text-[#A477B5]">Sync</span>
            </h1>

            <p className="text-[10px] font-semibold tracking-wider text-[#A092A5]">
              ONE SPACE. EVERYTHING IN SYNC.
            </p>
          </div>
        </Link>

        <div className="mx-4 mt-6 rounded-xl bg-[#F8F3FA] p-4">
          <p className="text-xs font-medium text-[#A092A5]">YOUR WORKSPACE</p>

          <p className="mt-1 text-sm font-bold text-[#574460]">
            {roleLabels[role]}
          </p>
        </div>

        <nav className="mt-7 flex-1 space-y-2 px-4">
          <p className="mb-3 px-3 text-[11px] font-bold tracking-widest text-[#B2A4B7]">
            MENU
          </p>

          {currentMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#F1E8F5] text-[#79558A]"
                    : "text-[#897A90] hover:bg-[#FAF6FC] hover:text-[#79558A]"
                }`
              }
            >
              <span className="w-5 text-center text-lg">{item.icon}</span>

              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-[#F1EAF3] p-4">
          <button
            onClick={() => navigate("/login")}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#D9877F] transition hover:bg-[#FFF2EF]"
          >
            <span className="text-lg">⇥</span>
            Logout
          </button>
        </div>
      </aside>

      <div className="ml-64 flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-19 items-center justify-end  border-[#EFE5F2] bg-white/9 px-8 backdrop-blur">
          <div className="flex items-center gap-2">
            <button
              className="rounded-xl p-2 text-lg text-[#79558A] transition hover:bg-[#F8F3FA]"
              title="Toggle theme"
            >
              ☀︎
            </button>

            <button
              className="relative rounded-xl p-2 text-xl text-[#79558A] transition hover:bg-[#F8F3FA]"
              title="Notifications"
            >
              🕭
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#EF8C83]"></span>
            </button>

            <Link
              to={`/${role}/profile`}
              className="flex items-center gap-3 border-l border-[#EFE5F2] pl-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EADCF0] font-bold text-[#79558A]">
                {roleNames[role]?.charAt(0)}
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold text-[#493951]">
                  {roleNames[role]}
                </p>

                <p className="text-xs text-[#A092A5]">{roleLabels[role]}</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
