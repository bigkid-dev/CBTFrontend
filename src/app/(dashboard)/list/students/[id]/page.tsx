import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-x-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top  */}
        <div className="flex mb-4 flex-col lg:flex-row gap-4">
          {/* User Info Card  */}
          <div className="gap-4 flex  bg-blue-100 py-6 px-4 rounded-md flex-1">
            <div className="w-1/3">
              <Image
                className="w-36 h-36 rounded-full object-cover border"
                src={
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
                width={144}
                height={144}
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Sola Alison</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/blood.png"} alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/date.png"} alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/mail.png"} alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/phone.png"} alt="" width={14} height={14} />
                  <span>+ 234 567 890</span>
                </div>
              </div>
            </div>
          </div>
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
                <h1 className="text-xl font-semibold">90%</h1>
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
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom  */}
        <div className="Smt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3 flex-col gap-4">
        <div className="bg-white p-4 rounded-md mb-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-blue-100" href={"/"}>
              Student&apos; Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-purple-100"
              href={`/list/teachers?classId=${2}`}
            >
              Student&apos; Teachers
            </Link>
            <Link className="p-3 rounded-md bg-yellow-100" href={"/"}>
              Student&apos; Exams
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={"/"}>
              Student&apos; Results
            </Link>
            <Link href={"/"} className="p-3 rounded-md bg-blue-50">
              Student&apos; Assignment
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleStudentPage;
