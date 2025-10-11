import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={10} height={10} />
      <input
        className="w-[200px] outline-none p-2 bg-transparent"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
