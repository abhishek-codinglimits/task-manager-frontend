"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Search, UserPlus } from "lucide-react";


export default function Teams() {
    const [isModalOpen,setIsModalOpen]=useState(false);
  return (
    <div className="max-w-6xl p-8 mx-auto bg-white rounded-xl shadow-lg">
      <PageHeader
        title={"Teams Management"}
        description={"Organize users into teams for projects and departments."}
      />
      <div className="mb-6 flex items-center justify-between gap-2 md:flex-row">
        <div className="relative w-full/ md:w-auto md:grow">
          <Search className="absolute left-2 top-1/4" size={20} />
          <input
            placeholder="Search for Team..."
            className="w-full py-3 pl-10 pr-4 text-gray-700 placeholder-gray-600 
                transition-all duration-200 bg-gray-100 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-orange-600 focus:bg-white"
          />
        </div>
        <button
          type="button"
          className="flex justify-between items-center px-6 py-4 bg-orange-600 text-white rounded-xl "
        onClick={()=>setIsModalOpen(!isModalOpen)}
        >
          <UserPlus size={20} /> Create Team
        </button>
      </div>
              {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedTeam ? 'Update Team' : 'Create Team'}</h2>
              <button onClick={()=>setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form >
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Team Name</label>
                <input
                  type="text"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>

              {/* Team Lead dropdown */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Team Lead</label>
                <select
                 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                >
                  <option value="">Select a lead</option>
                  {managers.map(m => (
                    <option key={m._id} value={m._id}>
                      {m.name} — {m.designation}
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Members list (all, disabled if in other team) */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Team Members</label>
                <div className="border border-gray-300 rounded-lg max-h-40 overflow-y-auto">
                  {teamMembers.map(u => {
                    const assignedTeamName = assignedMembersMap[u._id];
                    const isDisabled = assignedTeamName && !selectedMembers.includes(u._id); // allow current team members
                    return (
                      <div key={u._id} className="flex items-center p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          value={u._id}
                          checked={selectedMembers.includes(u._id)}
                          onChange={() => handleMemberSelection(u._id)}
                          disabled={isDisabled}
                          className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                        />
                        <label className="ml-3 text-gray-700">
                          <span className="font-medium">{u.name}</span> — <span className="text-gray-500">{u.designation}</span>
                          {isDisabled && <span className="text-red-500 ml-2 text-sm">(Already in {assignedTeamName})</span>}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-colors"
                >
                  {selectedTeam ? 'Update Team' : 'Create Team'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
