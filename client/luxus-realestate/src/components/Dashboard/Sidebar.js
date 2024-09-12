import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Luxus Real Estate</h1>
        <nav>
          <ul className="space-y-4">
            <li>Dashboard</li>
            <li>Messages</li>
            <li>Schedule Tours</li>
            <li>My Properties</li>
            <li>Saved Searches</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
