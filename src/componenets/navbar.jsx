import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import SearchBar from "./searchbar";

export default function Navbar({ search, setSearch }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#2d388a] to-[#00aeef] text-white p-4 flex items-center shadow-md relative">
      {/* Left side links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline text-white hover:text-blue-200 transition">Home</Link>
        <Link to="/about" className="hover:underline text-white hover:text-blue-200 transition">About</Link>
      </div>

      {/* Push search bar to right */}
      <div className="ml-auto w-1/3">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Profile Section */}
      <div className="ml-6 relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xl focus:outline-none"
        >
          👤
        </button>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
            <button className="block w-full text-left bg-white px-4 py-2 hover:bg-gray-400 transition">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
