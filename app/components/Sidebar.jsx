// export default function Sidebar(){
//     const SidebarItems=[
//         {
//           parentLabel:'OVERVIEW',
//           childLabel:[{
//             label:"Dashbord",
//             path:'/admin/dashboard'
//           }],
//         },
//         {
//           parentLabel:"MANAGEMENT",
//           childLabel:[{
//             label:"User Management",
//             path:'/admin/user-management'
//           },
//           {
//             label:"Teams",
//             path:'/admin/teams'
//           },
//           {
//             label:"Project Management",
//             path:'/admin/project-management'
//           }
//         ]
//         }
//     ]
//     return(
//     <aside className="w-1/6 min-h-screen bg-[#1e2a3a] p-4 text-white/90 
//     flex flex-col justify-between">
//         <ul className="flex justify-around items-center">
//           {SidebarItems.map((items,index)=>{
//             <li key={index}>
//               <div className="">{items.parentLabel}</div>
//               <div className="">{items.childLabel}</div>
//             </li>
//           })
//           }
//         </ul>
//     </aside>
//     )
// }
// "use client";
// import { useState } from "react";
// import { FiHome, FiUsers, FiSettings, FiMenu } from "react-icons/fi";
// import Link from "next/link";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex">

//       {/* Toggle button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="md:hidden p-3 text-gray-700"
//       >
//         <FiMenu size={26} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`h-screen bg-gray-900 text-white p-5 flex flex-col gap-6 transition-all duration-300
//           ${open ? "w-64" : "w-0 overflow-hidden md:w-16"}
//         `}
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="h-10 w-10 bg-gray-700 rounded flex items-center justify-center font-bold">
//             T
//           </div>

//           {open && <h1 className="text-xl font-semibold">Talsy Admin</h1>}
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col gap-3 mt-5">
//           <SidebarItem icon={<FiHome />} label="Dashboard" href="/admin/dashboard" open={open} />
//           <SidebarItem icon={<FiUsers />} label="Users" href="/admin/users" open={open} />
//           <SidebarItem icon={<FiSettings />} label="Settings" href="/admin/settings" open={open} />
//         </nav>

//         {/* Footer */}
//         <div className="mt-auto text-gray-400 text-sm">
//           {open && "© 2024 Talsy"}
//         </div>

//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">{/* Your page content here */}</div>
//     </div>
//   );
// }

// function SidebarItem({ icon, label, href, open }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center gap-3 bg-gray-800/30 hover:bg-gray-700/50 p-3 rounded-lg transition-all cursor-pointer"
//     >
//       <span className="text-xl">{icon}</span>
//       {open && <span className="text-sm">{label}</span>}
//     </Link>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  LayoutGrid,
  UserCog,
  Users2,
  Briefcase,
  CalendarCheck,
  ClipboardList,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname(); // ← GET CURRENT ROUTE

  return (
    <aside className="w-64 min-h-screen bg-[#1e2a3a] text-white/90 flex flex-col p-6">
      
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/talsy_logo.png"
          alt="Talsy Logo"
          className="h-12 object-contain"
          width={200}
          height={200}
        />
      </div>

      {/* MAIN SECTIONS */}
      <nav className="space-y-8 flex-1">

        {/* OVERVIEW */}
        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wider">OVERVIEW</p>
          <ul className="space-y-2">
          <SidebarItem 
            icon={<LayoutGrid size={18} />} 
            label="Dashboard" 
            path="/admin/dashboard" 
            active={pathname === "/admin/dashboard"}
          />
          </ul>
        </div>

        {/* MANAGEMENT */}
        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wider">MANAGEMENT</p>
          <ul className="space-y-2">
            <SidebarItem icon={<UserCog size={18} />} label="User Management" path="/admin/user-management" active={pathname === "/admin/user-management"} />
            <SidebarItem icon={<Users2 size={18} />} label="Teams" path="/admin/teams" active={pathname === "/admin/teams"} />
            <SidebarItem icon={<Briefcase size={18} />} label="Project Management" path="/admin/project-management" active={pathname === "/admin/project-management"} />
          </ul>
        </div>

        {/* OPERATIONS */}
        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wider">OPERATIONS</p>
          <ul className="space-y-2">
            <SidebarItem icon={<CalendarCheck size={18} />} label="Attendance & Timesheets" path="/admin/attendance" active={pathname === "/admin/attendance"} />
            <SidebarItem icon={<ClipboardList size={18} />} label="Tasks (Global)" path="/admin/tasks" active={pathname === "/admin/tasks"} />
            <SidebarItem icon={<BarChart3 size={18} />} label="Reports / Analytics" path="/admin/reports" active={pathname === "/admin/reports"} />
          </ul>
        </div>

        {/* SYSTEM */}
        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wider">SYSTEM</p>
          <ul>
            <SidebarItem icon={<Settings size={18} />} label="Settings" path="/admin/settings" active={pathname === "/admin/settings"} />
          </ul>
        </div>
      </nav>

      {/* LOGOUT (BOTTOM FIXED) */}
      <div className="mt-8">
        <button
          onClick={() => console.log("Logout")}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md hover:bg-[#253445] transition-all text-gray-300 hover:text-white"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, path, active }) {
  return (
    <li>
      <Link
        href={path}
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150 
          ${active 
            ? "bg-[#5b3cf5] bg-orange-600 text-white shadow-md" 
            : "text-gray-300 hover:bg-[#253445] hover:text-white"
          }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}

