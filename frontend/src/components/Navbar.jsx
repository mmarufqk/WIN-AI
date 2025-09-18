import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ACCES_TOKEN, REFRESH_TOKEN } from "../constants";
import logo from "../assets/winai.png";
import profileIcon from "../assets/profile.png";

function Navbar() {
  const navigate = useNavigate();
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const submenuRefs = useRef({});
  const [flipped, setFlipped] = useState({});
  const [isProgrammingOpen, setIsProgrammingOpen] = useState(false);


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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Object.keys(submenuRefs.current).forEach((key) => {
      const el = submenuRefs.current[key];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.right > window.innerWidth - 10) { 
        setFlipped(prev => ({ ...prev, [key]: true }));
      } else {
        setFlipped(prev => ({ ...prev, [key]: false }));
      }
    });
  }, []);
  // 

  const handleLogout = () => {
    localStorage.removeItem(ACCES_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/70 backdrop-blur shadow-lg py-2 rounded-2xl"
          : "bg-white/70 backdrop-blur-lg shadow-xl py-4 rounded-2xl"
        }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
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
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Dropdown Program Desktop */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 flex items-center">
              Program
              <svg
                className="w-4 h-4 ml-1"
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

            {/* menu utama */}
            <div className="absolute left-0 top-full mt-8 w-56 bg-gradient-to-b from-white to-gray-400 border border-gray-200 rounded-md shadow-lg 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-200 z-10">



              {/* Course */}
              {/* Course */}
              <div className="relative group/item">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                  Course
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

                {/* submenu course */}

                <div className="absolute left-full top-0 mt-0 w-48 bg-gradient-to-b from-white to-gray-400 border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">

                  {/* Programming with another submenu */}
                  <div className="relative group/subitem">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                      Programming
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div
  ref={(el) => (submenuRefs.current["programming"] = el)}
  className={`absolute top-0 ${
    flipped["programming"] ? "right-full" : "left-full"
  } mt-0 w-56 bg-gradient-to-b from-white to-gray-400 border border-gray-200 rounded-md shadow-lg
     opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible 
     transition-all duration-200 z-10`}
>

  <Link
    to="/course/programming/junior"
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    Junior
  </Link>
  <Link
    to="/course/programming/middle"
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    Middle
  </Link>
  <Link
    to="/course/programming/senior"
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    Senior
  </Link>
</div>


                  </div>

                  {/* Other courses */}
                  <Link to="/course/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</Link>
                  <Link to="/course/data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Science</Link>
                </div>
              </div>


              {/* Competition */}
              <div className="relative group/item">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                  Competition
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

                {/* submenu competition */}
                <div className="absolute ml-0.5 top-0 left-full mt-0 w-56 bg-gradient-to-b from-white to-gray-400 border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
  <Link to="/competition/data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    Competition Data Science
  </Link>
</div>

              </div>
            </div>
          </div>


          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>

          {/* Login / Profile */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="text-gray-700 hover:text-blue-600 focus:outline-none z-50 relative"
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
        className={`md:hidden fixed top-[84px] rounded-2xl left-0 w-full 
    bg-gradient-to-b from-white to-gray-400
    shadow-lg overflow-hidden 
    transition-all duration-300 z-40 
    ${isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"}`}
      >


        <div className="flex flex-col items-start px-6 py-4 space-y-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 text-lg w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Program Mobile */}
          <div className="w-full">
            <button
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              className="text-gray-800 hover:text-blue-600 text-lg flex items-center w-full justify-between"
            >
              Program
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${isProgramOpen ? "rotate-180" : ""
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

            {isProgramOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-2">
                {/* Course Submenu */}
                <button
                  onClick={() => setIsCourseOpen(!isCourseOpen)}
                  className="text-gray-700 hover:text-blue-600 flex justify-between items-center"
                >
                  Course
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isCourseOpen ? "rotate-90" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {isCourseOpen && (
  <div className="flex flex-col pl-4 mt-2 space-y-2">
    {/* Programming Submenu */}
    <button
      onClick={() => setIsProgrammingOpen(!isProgrammingOpen)}
      className="text-gray-600 hover:text-blue-600 flex justify-between items-center"
    >
      Programming
      <svg
        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isProgrammingOpen ? "rotate-90" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {isProgrammingOpen && (
      <div className="flex flex-col pl-4 mt-2 space-y-2">
        <Link to="/course/programming/junior" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Junior</Link>
        <Link to="/course/programming/middle" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Middle</Link>
        <Link to="/course/programming/senior" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Senior</Link>
      </div>
    )}

    {/* Other Courses */}
    <Link to="/course/design" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Design</Link>
    <Link to="/course/data-science" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Data Science</Link>
  </div>
)}


                {/* Competition Submenu */}
                <button
                  onClick={() => setIsCompetitionOpen(!isCompetitionOpen)}
                  className="text-gray-700 hover:text-blue-600 flex justify-between items-center"
                >
                  Competition
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isCompetitionOpen ? "rotate-90" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {isCompetitionOpen && (
                  <div className="flex flex-col pl-4 mt-2 space-y-2">
                    <Link
                      to="/competition/data-science"
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Data Science
                    </Link>
                  </div>
                )}
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
            <Link
              to="/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center"
            >
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
