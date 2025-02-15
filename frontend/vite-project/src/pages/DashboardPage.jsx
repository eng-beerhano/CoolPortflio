import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, FilePlus, FolderPlus, Briefcase, List, Mail, LogOut } from "lucide-react"; // Import icons

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <nav className="w-1/4 bg-white p-4 shadow-md flex flex-col justify-between min-h-screen">
          <div>
            <img src="/path/to/logo.png" alt="Logo" className="h-10 mb-4" />
            <h1 className="text-2xl font-bold mb-4">Eng berdev</h1>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard/addskills" className="flex items-center text-black">
                  <FilePlus className="w-5 h-5 mr-2" /> Add Skill
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-project" className="flex items-center text-black">
                  <FolderPlus className="w-5 h-5 mr-2" /> Add Project
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-experience" className="text-black flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" /> Add Experience
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-skills" className="flex items-center text-black">
                  <List className="w-5 h-5 mr-2" /> All Skills
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Allprojects" className="flex items-center text-black">
                  <List className="w-5 h-5 mr-2" /> All Projects
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-experiences" className="flex items-center text-black">
                  <List className="w-5 h-5 mr-2" /> All Experiences
                </Link>
              </li>
              <li>
                <Link to="/dashboard/inbox" className="flex items-center text-black">
                  <Mail className="w-5 h-5 mr-2" /> Inbox
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-white bg-red-500 p-2 rounded hover:bg-red-600"
          >
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </nav>
        <main className="w-3/4 p-4">
          <h2 className="text-xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
          {/* Add routes for different sections here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
