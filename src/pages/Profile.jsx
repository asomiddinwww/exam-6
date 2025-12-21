import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  const [open, setOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("menuOpen")) || false;
  });

  useEffect(() => {
    localStorage.setItem("menuOpen", JSON.stringify(open));
  }, [open]);
  const [form, setForm] = useState({
    ism: "Olimbek",
    email: "usern88@mail.ru",
    familya: "Olimov",
    rol: "manager",
  });

  const [openEdit, setOpenEdit] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [tempForm, setTempForm] = useState(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTempChange = (e) => {
    setTempForm({ ...tempForm, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setForm(tempForm);
    setOpenEdit(false);
  };
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
                  Profile
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
        <div className="p-6 flex flex-col pt-5 gap-5 w-full">
          <div className="w-full rounded-2xl p-6 shadow flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div class="relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-user text-foreground"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                </svg>
                <div class="absolute bottom-0 -right-2  rounded-full p-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
                  </svg>
                </div>
              </div>
              <div class="max-[380px]:text-center">
                <h1 class="text-2xl font-bold max-[800px]:text-lg">
                  Olimbek Olimov
                </h1>
                <p class="max-[800px]:text-sm">usern88@mail.ru</p>
                <div class="flex items-center gap-2 text-sm mt-2">
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
                    class="lucide lucide-calendar"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p class="max-[800px]:text-sm">Qo'shilgan:2025-06-04</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#e8000c] pl-3 pr-3 rounded-[5px] text-white text-[15px] pb-[2px]">
                manager
              </button>
            </div>
          </div>
          <div className="shadow w-full p-6 flex flex-col gap-3 rounded-2xl">
            <div className="pb-1">
              <h1 className="text-[20px] font-[600]">Profil ma'lumotlari</h1>
              <p className="text-[#6e7c8a] text-[15px] pt-1">
                Shaxsiy ma'lumotlaringizni yangilashingiz mumkin.
              </p>
            </div>
            <div className="w-full">
              <div>
                <div className="flex w-full gap-5">
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col">
                      <label>Ism</label>
                      <input
                        value={form.ism}
                        readOnly
                        className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Email</label>
                      <input
                        value={form.email}
                        readOnly
                        className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col">
                      <label>Familiya</label>
                      <input
                        value={form.familya}
                        readOnly
                        className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Rol</label>
                      <input
                        value={form.rol}
                        readOnly
                        className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-5">
                  <button
                    onClick={() => setOpenPassword(true)}
                    className="px-3 py-1 bg-black text-white rounded rounded-[8px]"
                  >
                    Parolni o'zgartirish
                  </button>
                  <button
                    onClick={() => {
                      setTempForm(form);
                      setOpenEdit(true);
                    }}
                    className="px-3 py-1 bg-black text-white rounded rounded-[8px]"
                  >
                    O'zgartirish
                  </button>
                </div>
              </div>

              {openEdit && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-xl w-[400px] flex flex-col gap-3">
                    <h1 className="text-lg font-semibold">
                      Profilni tahrirlash
                    </h1>

                    <input
                      name="ism"
                      value={tempForm.ism}
                      onChange={handleTempChange}
                      placeholder="Ism"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />
                    <input
                      name="email"
                      value={tempForm.email}
                      onChange={handleTempChange}
                      placeholder="Email"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />
                    <input
                      name="familya"
                      value={tempForm.familya}
                      onChange={handleTempChange}
                      placeholder="Familiya"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />
                    <input
                      name="rol"
                      value={tempForm.rol}
                      onChange={handleTempChange}
                      placeholder="Rol"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />

                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setOpenEdit(false)}
                        className="border px-3 py-1 rounded"
                      >
                        Bekor
                      </button>
                      <button
                        onClick={saveProfile}
                        className="bg-black text-white px-3 py-1 rounded"
                      >
                        Saqlash
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {openPassword && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-xl w-[400px] flex flex-col gap-3">
                    <h1 className="text-lg font-semibold">
                      Parolni o‘zgartirish
                    </h1>

                    <input
                      type="password"
                      placeholder="Eski parol"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />
                    <input
                      type="password"
                      placeholder="Yangi parol"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />
                    <input
                      type="password"
                      placeholder="Yangi parol (takror)"
                      className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                    />

                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setOpenPassword(false)}
                        className="border pt-[4px] rounded-[8px] border-[#e8e7e6] pl-3 pb-[6px] outline-0"
                      >
                        Bekor
                      </button>
                      <button className="bg-black text-white px-3 py-1 rounded">
                        Saqlash
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
