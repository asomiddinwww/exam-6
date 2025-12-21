import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔄 APP OCHILGANDA LOCALSTORAGE'DAN O'QISH
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      // setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `https://admin-crm.onrender.com/api/auth/sign-in`,
        { email, password }
      );

      console.log("LOGIN RESPONSE:", res.data);

      const token =
        res.data.token ||
        res.data.accessToken ||
        res.data.data?.token;

      if (!token) throw new Error("TOKEN NOT FOUND");

      setUser(res.data.user);
      setToken(token);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", token);

      return true;
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  if (loading) return null; // yoki loader

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};