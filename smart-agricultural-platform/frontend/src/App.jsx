// frontend/src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SoilInput from "./pages/SoilInput"
import CropHealth from "./pages/CropHealth"
import Marketplace from "./pages/Marketplace"

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">
          Smart Agricultural Platform
        </div>

        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/soil">Soil Data</Link>
          <Link to="/health">Crop Health</Link>
          <Link to="/market">Marketplace</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/soil" element={<SoilInput />} />
          <Route path="/health" element={<CropHealth />} />
          <Route path="/market" element={<Marketplace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
