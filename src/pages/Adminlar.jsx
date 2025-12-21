import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Adminlar = () => {
  const { token } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(
    JSON.parse(localStorage.getItem("menuOpen")) || false
  );

  useEffect(() => {
    localStorage.setItem("menuOpen", JSON.stringify(open));
  }, [open]);

  useEffect(() => {
    if (!token) {
      console.warn("TOKEN YO‘Q");
      setLoading(false);
      return;
    }

    const fetchAdmins = async () => {
      try {
        const res = await axios.get(
          "https://admin-crm.onrender.com/api/staff/all-admins"
        );
        setAdmins(res.data?.data || []);
      } catch (err) {
        console.error("FETCH ADMINS ERROR:", err.response?.data || err.message);
        setAdmins([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, [token]);

  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.first_name?.toLowerCase().includes(search.toLowerCase()) ||
      admin.last_name?.toLowerCase().includes(search.toLowerCase()) ||
      admin.email?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
        ? true
        : (admin.status || "").toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex w-full min-h-screen bg-white text-black">
      {/* Sidebar */}
      <div className={open ? "block" : "hidden"}>
        <Header />
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Topbar */}
        <div className="p-4 flex justify-between border-b">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen((prev) => !prev)}>
              Toggle Sidebar
            </button>
            <div className="flex items-center gap-2">
              <Link to="/">Asosiy</Link>
              <span>/</span>
              <Link to="/adminlar">Adminlar</Link>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="p-4 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option>All</option>
            <option>faol</option>
            <option>tatilda</option>
            <option>nofaol</option>
          </select>
        </div>

        {/* Admin Table */}
        <div className="pt-4 p-4 text-[15px] font1">
          <div className="bg-white rounded-xl border border-[#e8e7e6] overflow-hidden">
            <table className="w-full text-left">
              <thead className="border-b border-[#e8e7e6]">
                <tr className="text-[14px] text-gray-500">
                  <th className="px-6 py-4">Ism</th>
                  <th className="px-6 py-4">Familiya</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Rol</th>
                  <th className="px-6 py-4">Holat</th>
                  <th className="px-6 py-4 text-right">Amallar</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  // ✅ SKELETON
                  Array.from({ length: 10 }).map((_, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="px-6 py-4">
                        <div className="h-4 w-32 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-40 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-56 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-24 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-5 w-24 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-4 flex justify-end">
                        <div className="h-4 w-6 rounded-full bg-gray-100 animate-pulse" />
                      </td>
                    </tr>
                  ))
                ) : filteredAdmins.length === 0 ? (
                  // ✅ EMPTY STATE
                  <tr>
                    <td colSpan="6" className="py-6 text-center text-gray-400">
                      Hech qanday admin topilmadi
                    </td>
                  </tr>
                ) : (
                  // ✅ REAL DATA
                  filteredAdmins.map((admin) => (
                    <tr
                      key={admin._id || admin.id}
                      className="border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">{admin.first_name}</td>
                      <td className="px-6 py-4">{admin.last_name}</td>
                      <td className="px-6 py-4 text-gray-600">{admin.email}</td>
                      <td className="px-6 py-4">{admin.role}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium
              ${
                admin.status === "faol"
                  ? "bg-green-100 text-green-600"
                  : admin.status === "tatilda"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
                        >
                          {admin.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">...</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlar;
