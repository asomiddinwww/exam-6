import React from "react";

const Asosiy = () => {
  return (
    <div className="w-full">
      <div className="p-5.5 border-[] border-b-1 w-full pl-3">
        <div class="flex items-center gap-4">
          <button
            data-slot="sidebar-trigger"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-6"
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
                <p class="font-medium text-[17px] max-[500px]:text-sm max-[425px]:hidden">
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
                class="lucide lucide-chevron-right hidden max-[425px]:hidden"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <p class="max-[500px]:text-sm"></p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Asosiy;
