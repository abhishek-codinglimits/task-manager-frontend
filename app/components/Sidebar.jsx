// export default function Sidebar(){
//     const SidebarItems=[
//         {
        
//         }
//     ]
//     return(
//     <aside className="w-1/3 min-h-screen bg-[#1e2a3a] px-4 py-">
        
//     </aside>
//     )
// }
"use client";
import { useState } from "react";
import { FiHome, FiUsers, FiSettings, FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-3 text-gray-700"
      >
        <FiMenu size={26} />
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-900 text-white p-5 flex flex-col gap-6 transition-all duration-300
          ${open ? "w-64" : "w-0 overflow-hidden md:w-16"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gray-700 rounded flex items-center justify-center font-bold">
            T
          </div>

          {open && <h1 className="text-xl font-semibold">Talsy Admin</h1>}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 mt-5">
          <SidebarItem icon={<FiHome />} label="Dashboard" href="/admin/dashboard" open={open} />
          <SidebarItem icon={<FiUsers />} label="Users" href="/admin/users" open={open} />
          <SidebarItem icon={<FiSettings />} label="Settings" href="/admin/settings" open={open} />
        </nav>

        {/* Footer */}
        <div className="mt-auto text-gray-400 text-sm">
          {open && "© 2024 Talsy"}
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{/* Your page content here */}</div>
    </div>
  );
}

function SidebarItem({ icon, label, href, open }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 bg-gray-800/30 hover:bg-gray-700/50 p-3 rounded-lg transition-all cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      {open && <span className="text-sm">{label}</span>}
    </Link>
  );
}

