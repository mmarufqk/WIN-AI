import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ACCES_TOKEN, REFRESH_TOKEN } from "../constants";
import logo from "../assets/winai.png";
import profileIcon from "../assets/profile.png";

function Navbar() {
  const navigate = useNavigate();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem(ACCES_TOKEN);
    setIsLoggedIn(!!token);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem(ACCES_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg py-4 fixed top-0 left-0 w-full z-50">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto mr-2 object-contain"
            />
          </Link>
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Dropdown Courses Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center focus:outline-none"
            >
              Courses
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                  isCoursesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link
                  to="/course/programming"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsCoursesOpen(false)}
                >
                  Programming
                </Link>
                <Link
                  to="/course/design"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsCoursesOpen(false)}
                >
                  Design
                </Link>
                <Link
                  to="/course/data-science"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsCoursesOpen(false)}
                >
                  Data Science
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            About
          </Link>

          {/* Login / Profile */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <img
                src={profileIcon}
                alt="Profile"
                className="h-12 w-auto object-contain"
              />
            </Link>
          )}
        </div>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            {!isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 z-40 ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 text-lg w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Dropdown Courses Mobile */}
          <div className="w-full">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="text-gray-800 hover:text-blue-600 text-lg flex items-center w-full justify-between"
            >
              Courses
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isCoursesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCoursesOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-2">
                <Link
                  to="/courses/programming"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programming
                </Link>
                <Link
                  to="/courses/design"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Design
                </Link>
                <Link
                  to="/courses/data-science"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Data Science
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 text-lg w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <hr className="w-full border-t border-gray-200 my-2" />

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-gray-800 hover:text-blue-600 text-lg w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full text-center hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <img
                src={profileIcon}
                alt="Profile"
                className="h-12 w-auto object-contain"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
