"use client";

import Link from "next/link";
import React from "react";
import { useParams, useRouter } from "next/navigation";

const DynamicSharedLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ spaceId: string }>();
  const router = useRouter();

  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className="z-40 w-[320px] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-150"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2">
            <li onClick={() => router.push("/dashboard/space")}>
              <a className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"></a>
            </li>
            <>
              <li>
                <Link
                  href={`/product/all`}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-[15px]">
                    All
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/product/scheduled`}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-[15px]">
                    Scheduled
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/listing/new"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                >
                  <button className="relative inline-flex h-10 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Create post
                    </span>
                  </button>
                </Link>
              </li>
            </>
          </ul>
        </div>
      </aside>
      <div className="w-full h-full">
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default DynamicSharedLayout;
