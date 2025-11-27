"use client";
import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Search, UserPlus, Edit, Circle, X, UserX2 } from 'lucide-react';


const StatusBadge = ({ status }) => {
  const normalizedStatus = status.toLowerCase();

  let badgeStyle = "";

  switch (normalizedStatus) {
    case "active":
      badgeStyle = "bg-green-100 text-green-600";
      break;
    case "inactive":
      badgeStyle = "bg-red-100 text-red-600";
      break;
    case "break":
      badgeStyle = "bg-yellow-100 text-yellow-600";
      break;
    default:
      badgeStyle = "bg-gray-100 text-gray-600";
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${badgeStyle}`}
    >
      <Circle size={8} className="mr-1" fill="currentColor" />
      {status}
    </span>
  );
};


export default function UserManagement() {
    const [searchTerm,setSearchTerm]=useState('');
    const[isModalOpen,setIsModalOpen]=useState(false);
      const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
    designation: ''
  });
      const getRandomColor = (id) => {
    const colors = ['bg-purple-500', 'bg-red-500', 'bg-orange-500', 'bg-teal-500', 'bg-indigo-500', 'bg-pink-500'];
    return colors[id % colors.length];
  };
  return (
    
    <div className="max-w-6xl p-8 mx-auto bg-white rounded-xl shadow-lg">
        <PageHeader title={"User Management"}
        description={"Add, edit, and manage users for your organization."}
        />
        {/* <div className="flex flex-col/ items-center justify-between gap-4 mb-6 md:flex-row">
          <div className="relative w-full md:w-auto md:flex-grow">
            <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
            <input
              type="text"
              placeholder="Search for users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-10 pr-4 text-gray-700 transition-all duration-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          
          <button
            onClick={() => {
              setEditUser(null);
              setFormData({ name: '', email: '', password: '', role: 'User', designation: '' });
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 w-full md:w-auto px-4 py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition-all duration-200 focus:ring-2 focus:ring-indigo-500 active:scale-95"
          >
            <UserPlus size={20} /> Add User
          </button>
        </div> */}
        <div className="mb-6 flex items-center justify-between gap-2 md:flex-row">
            <div className="relative w-full/ md:w-auto md:grow">
                <Search className="absolute left-2 top-1/4" size={20}/>
                <input
                placeholder="Search for user"
                className="w-full py-3 pl-10 pr-4 text-gray-700 placeholder-gray-600 
                transition-all duration-200 bg-gray-100 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-orange-600 focus:bg-white"
                />
            </div>
            <button type="button" 
            className="flex justify-between items-center px-6 py-4 bg-orange-600 text-white rounded-xl "
            onClick={()=>setIsModalOpen(!isModalOpen)}
            ><UserPlus size={20}/> Add User
            </button>
        </div>


        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">Designation</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">Last Login</th>
                <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
                <tbody className="bg-white divide-y divide-gray-200">
               
                
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full ${getRandomColor(0)}`}>
                          JB
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">joe dummy</div>
                          <div className="text-sm text-gray-500">joedummy@gmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Manager</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Manager</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={"active"} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">11/26/2025, 4:03:10 AM</td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          
                          className="text-blue-500 transition-colors duration-200 hover:text-blue-700"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          
                          className="text-red-500 transition-colors duration-200 hover:text-red-700"
                        >
                          <UserX2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                
            </tbody>
            </table>
        </div>
          {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/10">
          <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editUser ? 'Edit User' : 'Add New User'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <form >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    
                    className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    
                    className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                   
                    className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter designation"
                    required
                  />
                </div>

                {!editUser && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                    
                      className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                )}

                {editUser && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password (leave empty to keep current)</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                     
                      className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter new password"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    
                    className="block w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-all duration-200 active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-200 active:scale-95"
                >
                  {editUser ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        
    </div>   
  );
}
