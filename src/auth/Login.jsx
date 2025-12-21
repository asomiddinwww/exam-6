import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const ok = await login(email, password);
    if (ok) navigate("/");
    else setError("Email yoki parol noto‘g‘ri");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        data-aos="zoom-in"
        className="bg-[#111] p-8 rounded-2xl w-[380px] text-white shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Xush kelibsiz 👋
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Hisobingizga kirish uchun email va parolni kiriting
        </p>

        <label>Email</label>
        <input
          className="w-full p-3 mb-4 rounded bg-[#1b1b1b] border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Parol</label>
        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-[#1b1b1b] border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold"
        >
          Kirish
        </button>
      </div>
    </div>
  );
}
