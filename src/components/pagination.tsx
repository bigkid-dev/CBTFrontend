"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev =  ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (pageNo: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNo.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={() => {
          changePage(page - 1);
        }}
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        prev
      </button>
      <div className="flex items-center text-sm gap-2 ">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                className={`px-2 cursor-pointer rounded-sm ${
                  page === pageIndex ? `bg-blue-100` : ""
                }`}
                onClick={() => changePage(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      <button
        disabled={!hasNext}
        onClick={() => {
          changePage(page - 1);
        }}
        className="py-2 px-4 rounded-md bg-slate text-xs bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
