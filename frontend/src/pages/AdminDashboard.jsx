import React, { useState } from "react";
import Navbar from "../components/Navbar/index.js"; // Import the Sidebar component
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FiTrendingUp, FiUsers, FiFileText, FiBell } from "react-icons/fi"; // Icons for Stats and Notifications
import { BsGraphUp } from "react-icons/bs"; // Icon for Charts

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Chart data and options
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Bookings",
        data: [30, 45, 60, 50, 70, 55, 65],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: 'black', // Legend text color
        },
      },
      title: {
        display: true,
        text: "Monthly Bookings",
        color: 'black', // Title text color
      },
    },
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-64 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white shadow-xl`}
        >
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Navbar toggle button for mobile */}
          <div className="md:hidden p-4">
            <button
              onClick={toggleSidebar}
              className="bg-blue-800 text-white px-4 py-2 rounded-md"
            >
              {isSidebarOpen ? "Close Menu" : "Open Menu"}
            </button>
          </div>

          {/* Main Dashboard content */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-4">Admin Dashboard</h1>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div>
                    <FiTrendingUp className="text-black text-3xl" />
                    <h2 className="text-lg font-bold mt-2 text-black hover:text-yellow-400 transition-colors duration-300">Total Bookings</h2>
                    <p className="text-3xl font-bold text-black">1,245</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div>
                    <FiUsers className="text-black text-3xl" />
                    <h2 className="text-lg font-bold mt-2 text-black hover:text-yellow-400 transition-colors duration-300">Users</h2>
                    <p className="text-3xl font-bold text-black">320</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div>
                    <FiFileText className="text-black text-3xl" />
                    <h2 className="text-lg font-bold mt-2 text-black hover:text-yellow-400 transition-colors duration-300">Reports Generated</h2>
                    <p className="text-3xl font-bold text-black">42</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Notifications Panel */}
              <div className="p-6 bg-white shadow-xl rounded-lg">
                <h2 className="font-semibold text-xl mb-4 text-black flex items-center">
                  <FiBell className="mr-2 text-black" /> Notifications
                </h2>
                <ul>
                  <li className="border-b py-2 text-black hover:text-yellow-400 transition-colors duration-300">New booking from Jane Doe</li>
                  <li className="border-b py-2 text-black hover:text-yellow-400 transition-colors duration-300">User account updated</li>
                  <li className="border-b py-2 text-black hover:text-yellow-400 transition-colors duration-300">System maintenance scheduled</li>
                  <li className="border-b py-2 text-black hover:text-yellow-400 transition-colors duration-300">New feature release: Custom reports</li>
                </ul>
              </div>

              {/* Recent Activity Feed */}
              <div className="p-6 bg-white shadow-xl rounded-lg">
                <h2 className="font-semibold text-xl mb-4 text-black flex items-center">
                  <FiTrendingUp className="mr-2 text-black" /> Recent Activity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
                    <p className="text-black hover:text-yellow-400 transition-colors duration-300">User John Smith created a new event.</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
                    <p className="text-black hover:text-yellow-400 transition-colors duration-300">Booking confirmed for Sarah Lee.</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                    <p className="text-black hover:text-yellow-400 transition-colors duration-300">Issue reported with the payment gateway.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
