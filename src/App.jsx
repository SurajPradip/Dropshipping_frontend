import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./pages/customer/first_page";
import About from "./pages/customer/about";
import Navbar from "./componenets/navbar"; // import standalone navbar

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="h-screen w-screen flex flex-col font-sans">
        {/* Navbar */}
        <Navbar search={search} setSearch={setSearch} />

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<FirstPage search={search} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
