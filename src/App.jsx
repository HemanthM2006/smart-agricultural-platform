// src/App.jsx

import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SoilInput from "./pages/SoilInput"
import CropHealth from "./pages/CropHealth"
import Marketplace from "./pages/Marketplace"

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return "active"
    return location.pathname.startsWith(path) && path !== "/" ? "active" : ""
  }

  return (
    <nav className="navbar">
      <div className="logo">Smart Agricultural Platform</div>

      <div className="nav-links">
        <Link className={isActive("/")} to="/">Dashboard</Link>
        <Link className={isActive("/soil")} to="/soil">Soil Data</Link>
        <Link className={isActive("/health")} to="/health">Crop Health</Link>
        <Link className={isActive("/market")} to="/market">Marketplace</Link>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/soil" element={<SoilInput />} />
          <Route path="/health" element={<CropHealth />} />
          <Route path="/market" element={<Marketplace />} />
        </Routes>
      </main>
    </HashRouter>
  )
}
