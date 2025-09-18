"use client";
import React from "react";
import Image from "next/image";

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="" />
      </div>
    </div>
  );
};

export default FinanceChart;
