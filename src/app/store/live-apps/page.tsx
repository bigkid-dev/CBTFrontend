import React from "react";

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const LiveApps = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-x-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top  */}
        <div className="flex mb-4 flex-col lg:flex-row gap-4">
          {/* User Info Card  */}

          {/* Small  CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card  */}
            <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                className="w-6 h-6"
                src={"/singleBranch.png"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">CBT APP</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                className="w-6 h-6"
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image
                className="w-6 h-6"
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="w-full p-4 bg-white rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                className="w-6 h-6"
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom  */}
        <div className="Smt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3 flex-col gap-4">
        <div className="bg-white p-4 rounded-md mb-4">
          <h1 className="text-xl font-semibold">Games</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-blue-100" href={"/"}>
              Teacher&apos; Classes
            </Link>
            <Link className="p-3 rounded-md bg-purple-100" href={"/"}>
              Teacher&apos; Students
            </Link>
            <Link className="p-3 rounded-md bg-yellow-100" href={"/"}>
              Teacher&apos; Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={"/"}>
              Teacher&apos; Classes
            </Link>
            <Link href={"/"} className="p-3 rounded-md bg-blue-50">
              Teacher&apos; Assignment
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default LiveApps;
