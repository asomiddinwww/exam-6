import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Sozlamalar = () => {
  const [open, setOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("menuOpen")) || false;
  });

  useEffect(() => {
    localStorage.setItem("menuOpen", JSON.stringify(open));
  }, [open]);
  return (
    <div className="w-full flex">
      <div
        className={`
    transition-all duration-300 ease-in-out
    ${open ? "w-77 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-5"}
    overflow-hidden
  `}
      >
        <Header />
      </div>
      <div className="w-full">
        <div className="p-[12px] border-[#9e9d9d] flex justify-between  border-b-1 w-full pl-3">
          <div class="flex items-center gap-4">
            <button
              onClick={() => setOpen((prev) => !prev)}
              data-slot="sidebar-trigger"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none"
              data-sidebar="trigger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-panel-left size-6"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span class="sr-only">Toggle Sidebar</span>
            </button>
            <div>
              <div class="flex items-center gap-2 cursor-pointer ">
                <a href="/">
                  <p class="font-medium max-[500px]:text-sm text-[17px] max-[425px]:hidden">
                    Asosiy
                  </p>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right false max-[425px]:hidden"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <Link to={"/"} class="max-[500px]:text-sm text-[17px]">
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div>
              <button class="items-center justify-center gap-2  rounded-md text-sm font-medium transition-all outline-none  border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground size-9 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon  absolute h-[1.2rem] w-[1.2rem]  scale-100 transition-all dark:rotate-0 dark:scale-100"
                  aria-hidden="true"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center  gap-2">
              <div class="flex flex-col items-end">
                <h1 class="max-[500px]:text-sm max-[342px]:hidden">
                  Olimbek Olimov
                </h1>
                <p class="flex items-center gap-1 text-sm max-[500px]:text-[12px] max-[342px]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-users max-[500px]:text-sm"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Manager
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-user !text-foreground"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sozlamalar;
