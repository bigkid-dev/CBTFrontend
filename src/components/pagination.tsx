import React from "react";

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        prev
      </button>
      <div className="flex items-center text-sm gap-2 ">
        <button className="px-2 rounded-sm bg-blue-100">1</button>
        <button className="px-2 rounded-sm bg-blue-100">2</button>
        <button className="px-2 rounded-sm bg-blue-100">3</button>
        ...
        <button className="px-2 rounded-sm bg-blue-100">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        prev
      </button>
    </div>
  );
};

export default Pagination;
