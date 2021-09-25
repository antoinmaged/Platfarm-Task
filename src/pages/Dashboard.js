import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import DashboardSection1 from '../partials/dashboard/DashboardSection1';
import DashboardSection2 from '../partials/dashboard/DashboardSection2';
import DashboardSection3 from '../partials/dashboard/DashboardSection3';
import DashboardSection4 from '../partials/dashboard/DashboardSection4';
import MapLeaflet from '../partials/MapLeaflet';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <WelcomeBanner />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
               
              <DashboardAvatars />

                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Bar chart (Direct vs Indirect) */}
              <DashboardSection1 />
              {/* Line chart (Real Time Value) */}
              <DashboardSection2 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardSection3 />
              {/* Table (Top Channels) */}
              <DashboardSection4 />
            </div>

          </div>
        </main>


      </div>

      <MapLeaflet />

    </div>
    
  );
}

export default Dashboard;