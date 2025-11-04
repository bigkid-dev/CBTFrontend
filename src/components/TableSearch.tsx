"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value  = (e.currentTarget[0] as HTMLInputElement).value
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
    >
      <Image src="/search.png" alt="" width={10} height={10} />
      <input
        className="w-[200px] outline-none p-2 bg-transparent"
        placeholder="Search..."
      />
    </form>
  );
};

export default TableSearch;
