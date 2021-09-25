import React from 'react';
import HeaderIcon from '../../images/Field Screen/TopIcon1.png';

function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">

      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1"><img src={HeaderIcon} className="headerIcon"></img>Field : PIV-01</h1>
      </div>

    </div>
  );
}

export default WelcomeBanner;
