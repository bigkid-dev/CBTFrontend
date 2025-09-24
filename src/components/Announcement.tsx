import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-s-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400"></span>
      </div>
      <div className="flex flex-col gap-4 mt">
        <div className="bg-blue-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque
            repellendus quasi
          </p>
        </div>
        <div className="bg-purple-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
        </div>
        <div className="bg-yellow-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
