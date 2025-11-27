// import Sidebar from "../../components/Sidebar";

// export default function Dashboard() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="relative">dashboard</div>
//     </div>
//   );
// }
"use client"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { User, UserX, ListTodo, AlertTriangle, Folder, CheckCircle2, Users } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const StatCard = ({ title, value, icon: Icon, iconBg, iconColor, borderColor }) => (
  <div className={`bg-white rounded-xl p-6 shadow-lg flex items-center justify-between border-t-4 ${borderColor}`}>
    <div>
      <p className="text-md font-semibold text-gray-500">{title}</p>      
      <h3 className="text-2xl font-bold text-black">{value}</h3>
    </div>
    <div className={`p-3 rounded-full ${iconBg}`}>
      <Icon size={24} className={iconColor} />
    </div>
  </div>
);

const ActivityItem = ({ avatar, name, action, time, avatarBg }) => (
  <div className="flex items-start space-x-4 mb-4">
    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-100 ${avatarBg}`}>
      {avatar}
    </div>
    <div className="flex-1">
      <p className="text-md text-black">
        <span className="font-semibold">{name}</span> {action}
      </p>
    </div>
    <div className="shrink-0 text-md text-black">{time}</div>
  </div>
);

const projectData = [
  { name: 'Completed', value: 45, color: '#22c55e' },
  { name: 'In Progress', value: 40, color: '#f59e0b' },
  { name: 'Overdue', value: 15, color: '#ef4444' },
];

const COLORS = ['#22c55e', '#f59e0b', '#ef4444'];

const Dashboard = () => {
  return (
    <div className="min-h-screen  text-slate-100 font-sans p-4 sm:p-8">
      {/* <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome, Admin! Here is an overview of your agency's performance.</p>
      </header> */}
      <PageHeader title={"Dashboard"} 
      description={"Welcome, Admin! Here is an overview of your agency's performance."}
      />

      <main>
        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Active Employees"
            value="22"
            icon={User}
            iconBg="bg-blue-600/20"
            iconColor="text-blue-500"
            borderColor="border-blue-700"
          />
          <StatCard
            title="Inactive Employees"
            value="7"
            icon={UserX}
            iconBg="bg-gray-300"
            iconColor="text-gray-600"
            borderColor="border-gray-400"
          />
          <StatCard
            title="Tasks in Progress"
            value="18"
            icon={ListTodo}
            iconBg="bg-yellow-600/10"
            iconColor="text-yellow-500"
            borderColor="border-yellow-500"
          />
          <StatCard
            title="Overdue Tasks"
            value="9"
            icon={AlertTriangle}
            iconBg="bg-red-600/20"
            iconColor="text-red-500"
            borderColor="border-red-500"
          />
          <StatCard
            title="Total Projects"
            value="25"
            icon={Folder}
            iconBg="bg-purple-600/20"
            iconColor="text-purple-500"
            borderColor="border-purple-500"
          />
          <StatCard
            title="Attendance %"
            value="90%"
            icon={CheckCircle2}
            iconBg="bg-green-600/20"
            iconColor="text-green-500"
            borderColor="border-green-500"

          />
        </section>

        {/* Main Content Sections */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-lg lg:col-span-2">
            <h2 className="text-xl font-bold text-black mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem
                avatar="JD"
                name="John Doe"
                action="created a new project "
                time="2 hrs ago"
                avatarBg="bg-blue-500"
              />
              <ActivityItem
                avatar="JS"
                name="Jane Smith"
                action="updated task "
                time="5 hrs ago"
                avatarBg="bg-green-500"
              />
              <ActivityItem
                avatar="AM"
                name="Alex Miller"
                action="commented on "
                time="1 day ago"
                avatarBg="bg-red-500"
              />
              <ActivityItem
                avatar="SK"
                name="Sarah Kim"
                action="joined the team "
                time="2 days ago"
                avatarBg="bg-purple-500"
              />
            </div>
          </div>

          {/* Project Status Overview */}
          <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold text-black mb-4">Project Status Overview</h2>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-64 xl:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
                <span className="text-sm text-gray-500">Completed (45%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                <span className="text-sm text-gray-500">In Progress (40%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                <span className="text-sm text-gray-500">Overdue (15%)</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;