import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
