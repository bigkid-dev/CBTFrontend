"use client";

import Image from "next/image";
import React, { useState } from "react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow-100"
      : type === "update"
      ? "bg-blue-50"
      : "bg-purple-100";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-cente font-medium text-center">
          All data will be lost. are you sure you want to delete this item{" "}
          {table}
        </span>
        <button className="bg-red-700 text-white w-max self-center py-2 px-4 rounded-md border-none">
          Delete
        </button>
      </form>
    ) : (
      "create or update form"
    );
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${size} ${bgColor} flex items-center justify-center rounded-full`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <Image src="/closeicon.png" alt="" width={16} height={16} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
