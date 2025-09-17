import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="flex-1 rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] p-4">
        <div className="flex justify-between items-center">
            <span className="text-[10px] py-1 px-2 rounded-full text-green-600 bg-white">
              2024/25
            </span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
