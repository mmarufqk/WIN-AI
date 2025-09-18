import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Design from "./pages/Design";
import DataScience from "./pages/DataScience";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import Dataset from "./pages/Datasets";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

// Logout component
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

// RegisterAndLogout component 
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

// Layout untuk halaman yang punya Navbar
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman tanpa Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />

        {/* Halaman dengan Navbar */}
        <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/course/programming" element={<Programming />} />
  <Route path="/course/programming/junior" element={<ComingSoon />} />
  <Route path="/course/programming/middle" element={<ComingSoon />} />
  <Route path="/course/programming/senior" element={<ComingSoon />} />
  <Route path="/course/design" element={<Design />} />
  <Route path="/course/data-science" element={<DataScience />} />
  <Route path="/datasets" element={<ProtectedRoute><Dataset /></ProtectedRoute>} />
  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
  <Route path="/about" element={<ComingSoon />} />
  <Route path="/competition/data-science" element={<ComingSoon />} />
  <Route path="*" element={<NotFound />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
