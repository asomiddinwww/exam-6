import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Asosiy from "./pages/Asosiy";
import Menagerlar from "./pages/Menagerlar";
import Adminlar from "./pages/Adminlar";
import Ustozlar from "./pages/Ustozlar";
import Studentlar from "./pages/Studentlar";
import Guruhlar from "./pages/Guruhlar";
import Kurslar from "./pages/Kurslar";
import Payment from "./pages/Payment";
import Sozlamalar from "./pages/Sozlamalar";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Asosiy />} />
        <Route path="/menagerlar" element={<Menagerlar />} />
        <Route path="/adminlar" element={<Adminlar />} />
        <Route path="/ustozlar" element={<Ustozlar />} />
        <Route path="/studentlar" element={<Studentlar />} />
        <Route path="/guruhlar" element={<Guruhlar />} />
        <Route path="/kurslar" element={<Kurslar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sozlamalar" element={<Sozlamalar />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
