"use client";

import Header from "../header";
import Sidebar from "../sidebar";

export default function CommonLayout({ children }) {
  return (
    <div className="flex h-full w-full bg-slate-50 dark:bg-slate-900">
      <Sidebar />
      <div className="h-full w-full font-serif dark:bg-indigo-400">
        <main className="mx-2.5 flex-none transition-all dark:bg-indigo-400 md:pr-2 ">
          <div>
            <Header />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
