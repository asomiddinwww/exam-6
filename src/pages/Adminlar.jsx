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
    const fetchAdmins = async () => {
      try {
        const res = await axios.get(
          "https://admin-crm.onrender.com/api/staff/all-admins",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setAdmins(res.data.data);
      } catch (err) {
        console.error(err);
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

  if (loading) return <p>Loadingg...</p>;
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
          <option>Tatilda</option>
          <option>Nofaol</option>
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
          {filteredAdmins?.map((admin) => (
            <tr
              key={admin.id}
              className="border-t border-gray-700 hover:bg-gray-900"
            >
              <td className="p-3">{admin.firstName}</td>
              <td className="p-3">{admin.lastName}</td>
              <td className="p-3">{admin.email}</td>
              <td className="p-3">{admin.role}</td>
              <td className="p-3">{admin.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
