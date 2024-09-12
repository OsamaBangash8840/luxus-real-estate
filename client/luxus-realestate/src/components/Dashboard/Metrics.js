import React from 'react';

const Metrics = ({ userProperties, profileViews, bookmarks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      <div className="bg-blue-500 p-6 rounded text-white">
        <h2 className="text-xl">Properties</h2>
        <p className="text-3xl">{userProperties.length}</p>
      </div>
      <div className="bg-yellow-400 p-6 rounded text-white">
        <h2 className="text-xl">Profile Views</h2>
        <p className="text-3xl">{profileViews || 0}</p>
      </div>
      <div className="bg-purple-500 p-6 rounded text-white">
        <h2 className="text-xl">Total Visitors</h2>
        <p className="text-3xl">599</p> {/* This is static, replace if dynamic */}
      </div>
      <div className="bg-pink-500 p-6 rounded text-white">
        <h2 className="text-xl">Bookmarks</h2>
        <p className="text-3xl">{bookmarks || 0}</p>
      </div>
    </div>
  );
};

export default Metrics;
