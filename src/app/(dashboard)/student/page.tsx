import React from "react";
import EventCalendar from "@/components/EventCalendar";
import Announcement from "@/components/Announcement";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <p className="text-xl font-semibold">Schedule (4A)</p>
      </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
