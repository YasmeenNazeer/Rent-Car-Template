"use client"

import React, { useState } from "react";
import {
  Settings,
  HelpCircle,
  LogOut,
  Home,
  BarChart2,
  RefreshCcw,
  MessageCircle,
  Calendar,
  Moon,
  ShoppingBag,
} from "lucide-react";


const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-700"}`}>
      {/* Sidebar - hidden on mobile */}
      <aside
        className={`hidden lg:flex flex-col w-64 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-r"
        } p-6`}
      >
        <div className="space-y-2">
          <h2 className={`text-xs font-medium mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            MAIN MENU
          </h2>

          <div className="space-y-1">
            <button
              className={`flex items-center w-full p-3 ${
                darkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
              } rounded-lg`}
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </button>

            {/* Other menu items */}
            <MenuItem icon={<Home />} label="Car Rent" darkMode={darkMode} />
            <MenuItem icon={<BarChart2 />} label="Insight" darkMode={darkMode} />
            <MenuItem icon={<RefreshCcw />} label="Reimburse" darkMode={darkMode} />
            <MenuItem icon={<MessageCircle />} label="Inbox" darkMode={darkMode} />
            <MenuItem icon={<Calendar />} label="Calendar" darkMode={darkMode} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className={`text-xs font-medium mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            PREFERENCES
          </h2>
          <div className="space-y-1">
            <MenuItem icon={<Settings />} label="Settings" darkMode={darkMode} />
            <MenuItem icon={<HelpCircle />} label="Help & Center" darkMode={darkMode} />
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 mr-3 text-gray-500" />
                <span>Dark Mode</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-6 flex items-center rounded-full ${
                  darkMode ? "bg-blue-700" : "bg-gray-300"
                } relative transition-colors duration-300`}
              >
                <span
                  className={`absolute ${
                    darkMode ? "translate-x-5" : "translate-x-1"
                  } transition-transform transform inline-flex items-center justify-center w-4 h-4 bg-white rounded-full shadow-md`}
                >
                  <Moon className="w-3 h-3 text-gray-400" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button
            className={`flex items-center w-full p-3 ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } rounded-lg`}
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}


     
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  darkMode: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, darkMode }) => (
  <button
    className={`flex items-center w-full p-3 ${
      darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
    } rounded-lg`}
  >
    <span className={`w-5 h-5 mr-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{icon}</span>
    <span>{label}</span>
  </button>
);

export default DashboardLayout;