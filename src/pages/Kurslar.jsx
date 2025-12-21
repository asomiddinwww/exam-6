import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Kurslar = () => {
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
        <div>
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
                      Courses
                    </Link>
                  </div>
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
          <div className="w-full flex items-center justify-between p-4">
            <h1 className="text-[32px] font-[600]">Kurslar</h1>
            <div className="flex items-center gap-4">
              <button className=" pl-2.5 pr-2.5 pt-[4px] pb-[3.5px] text-[15px] font-[600] flex items-center bg-black text-white gap-2 rounded-[8px]">
                <span className="text-[18px]">+</span> Kurs Qo'shish
              </button>
            </div>
          </div>
          <div class="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              data-slot="card"
              class="text-card-foreground gap-6 rounded-xl py-6 shadow-sm w-full max-w-md hover:shadow-lg transition-shadow duration-300 border border-muted bg-gradient-to-br from-background to-muted/10 flex flex-col justify-between"
            >
              <div
                data-slot="card-header"
                class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <div
                      data-slot="card-title"
                      class="text-2xl font-bold text-primary"
                    >
                      Backend
                    </div>
                    <div
                      data-slot="card-description"
                      class="text-sm mt-1 text-muted-foreground"
                    >
                      Backend
                    </div>
                  </div>
                  <span
                    data-slot="badge"
                    class="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 text-sm"
                  >
                    1,400,000 UZS
                  </span>
                </div>
              </div>
              <div
                data-slot="card-content"
                class="px-6 flex flex-col justify-between"
              >
                <div class="grid gap-4">
                  <div class="flex items-center space-x-4">
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
                      class="lucide lucide-clock h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span class="text-sm">8 oy</span>
                  </div>
                  <div class="flex items-center space-x-4">
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
                      class="lucide lucide-users h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span class="text-sm">15 students</span>
                  </div>
                </div>
              </div>
              <div
                data-slot="card-footer"
                class="px-6 [.border-t]:pt-6 flex items-center justify-between"
              >
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1"
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
                    class="lucide lucide-pencil h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  Edit
                </button>
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1 !bg-red-500 text-white hover:!bg-red-600"
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
                    class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                  O'chirish
                </button>
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1 bg-blue-500 text-white"
                >
                  Muzlatish
                </button>
              </div>
            </div>
            <div
              data-slot="card"
              class="text-card-foreground gap-6 rounded-xl py-6 shadow-sm w-full max-w-md hover:shadow-lg transition-shadow duration-300 border border-muted bg-gradient-to-br from-background to-muted/10 flex flex-col justify-between"
            >
              <div
                data-slot="card-header"
                class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <div
                      data-slot="card-title"
                      class="text-2xl font-bold text-primary"
                    >
                      Ingliz tili
                    </div>
                    <div
                      data-slot="card-description"
                      class="text-sm mt-1 text-muted-foreground"
                    >
                      Yangi kurs
                    </div>
                  </div>
                  <span
                    data-slot="badge"
                    class="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 px-3 py-1 text-sm"
                  >
                    1,000,000 UZS
                  </span>
                </div>
              </div>
              <div
                data-slot="card-content"
                class="px-6 flex flex-col justify-between"
              >
                <div class="grid gap-4">
                  <div class="flex items-center space-x-4">
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
                      class="lucide lucide-clock h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span class="text-sm">1 yil</span>
                  </div>
                  <div class="flex items-center space-x-4">
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
                      class="lucide lucide-users h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span class="text-sm">15 students</span>
                  </div>
                </div>
              </div>
              <div
                data-slot="card-footer"
                class="px-6 [.border-t]:pt-6 flex items-center justify-between"
              >
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1"
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
                    class="lucide lucide-pencil h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  Edit
                </button>
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1 !bg-red-500 text-white hover:!bg-red-600"
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
                    class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
                  O'chirish
                </button>
                <button
                  data-slot="button"
                  class="justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex items-center gap-1 bg-blue-500 text-white"
                >
                  Muzlatish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurslar;
