import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth(); // ✅ CONTEXT LOGIN
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login(email, password); // ✅ BACKEND LOGIN

    if (success) {
      navigate("/asosiy", { replace: true }); // yoki /admins
    } else {
      setError("Email yoki parol noto‘g‘ri!");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[430px] bg-[#181616] rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Xush kelibsiz 👋
        </h2>
        <p className="text-sm text-center text-white mb-6">
          Hisobingizga kirish uchun email va parolni kiriting
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border text-white border-gray-300 bg-[#2B323F]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 text-white">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border text-white border-gray-300 bg-[#2B323F]"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-3 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-white text-black rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Yuklanmoqda..." : "Kirish"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;