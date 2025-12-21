  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

  const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      if (email === "usern88@mail.ru" && password === "12345678") {
        const token = btoa(
          JSON.stringify({
            email,
            time: Date.now(),
          })
        );

        localStorage.setItem("authToken", token);

        navigate("/", { replace: true });
      } else {
        setError("Email yoki parol noto‘g‘ri!");
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <form
          onSubmit={handleSubmit}
          className="w-[420px] bg-[#181616] p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Admin Login
          </h2>

          <div className="mb-4">
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="usern88@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#2B323F] text-white outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-white mb-1">Parol</label>
            <input
              type="password"
              placeholder="12345678"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#2B323F] text-white outline-none"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-white text-black rounded-lg font-medium hover:opacity-90"
          >
            Kirish
          </button>
        </form>
      </div>
    );
  };

  export default Login;
