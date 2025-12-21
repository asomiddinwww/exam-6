import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function AdminsPage() {
  const { token } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchAdmins = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/admins`, // backend endpoint
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Agar backend bitta object qaytarsa, uni arrayga o'girib qo'yamiz
        if (Array.isArray(res.data.data)) {
          setAdmins(res.data.data);
        } else if (res.data.data) {
          setAdmins([res.data.data]);
        } else {
          setAdmins([]);
        }
      } catch (err) {
        console.error("Fetch admins error:", err);
        setAdmins([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, [token]);

  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.first_name.toLowerCase().includes(search.toLowerCase()) ||
      admin.last_name.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
        ? true
        : (admin.status || "").toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-6 text-white min-h-screen bg-black">
      <h1 className="text-2xl font-bold mb-4">Adminlar ro'yxati</h1>

      <div className="flex items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded text-black"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option>All</option>
          <option>faol</option>
          <option>tatilda</option>
          <option>nofaol</option>
        </select>
      </div>

      <table className="min-w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 text-left">Ism</th>
            <th className="p-3 text-left">Familiya</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Rol</th>
            <th className="p-3 text-left">Holat</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-400">
                Hech qanday admin topilmadi
              </td>
            </tr>
          ) : (
            filteredAdmins.map((admin) => (
              <tr
                key={admin._id}
                className="border-t border-gray-700 hover:bg-gray-900"
              >
                <td className="p-3">{admin.first_name}</td>
                <td className="p-3">{admin.last_name}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3">{admin.role}</td>
                <td className="p-3">{admin.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
