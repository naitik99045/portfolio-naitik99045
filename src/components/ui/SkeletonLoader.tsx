"use client";

import React from "react";

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-between bg-[#0b0d13] text-zinc-400 font-mono animate-pulse select-none">
      {/* Skeleton Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded bg-zinc-800" />
          <div className="w-48 h-4 rounded bg-zinc-800" />
        </div>
        <div className="w-32 h-6 rounded bg-zinc-800" />
      </div>

      {/* Skeleton Content Grid */}
      <div className="flex-1 py-6 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-4">
          <div className="w-24 h-4 rounded bg-zinc-800" />
          <div className="w-3/4 h-8 rounded bg-zinc-800" />
          <div className="space-y-2">
            <div className="w-full h-3 rounded bg-zinc-800" />
            <div className="w-5/6 h-3 rounded bg-zinc-800" />
            <div className="w-2/3 h-3 rounded bg-zinc-800" />
          </div>
          <div className="flex gap-2 pt-3">
            <div className="w-20 h-7 rounded bg-zinc-800" />
            <div className="w-24 h-7 rounded bg-zinc-800" />
            <div className="w-20 h-7 rounded bg-zinc-800" />
          </div>
        </div>

        <div className="col-span-5 p-4 rounded-lg bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="w-full h-4 rounded bg-zinc-800" />
          <div className="w-full h-28 rounded bg-zinc-950" />
          <div className="w-1/2 h-4 rounded bg-zinc-800" />
        </div>
      </div>

      {/* Skeleton Footer */}
      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-600">
        <div className="w-40 h-3 rounded bg-zinc-800" />
        <div className="w-24 h-3 rounded bg-zinc-800" />
      </div>
    </div>
  );
};
