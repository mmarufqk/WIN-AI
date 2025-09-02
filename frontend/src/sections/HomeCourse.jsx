import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import programmingImg from "../assets/programming.jpg";
import designImg from "../assets/design.jpg";
import datascienceImg from "../assets/datascience.jpg";

export default function HomeCourse() {
  const courses = [
    { title: "Programming", path: "/course/programming", desc: "Bdadasdasdas", img: programmingImg, btnColor: "bg-red-500 hover:bg-red-600" },
    { title: "Design", path: "/course/design", desc: "dsadasdas", img: designImg, btnColor: "bg-purple-500 hover:bg-purple-600" },
    { title: "Data Science", path: "/course/data-science", desc: "dasdasdasasd", img: datascienceImg, btnColor: "bg-yellow-400 hover:bg-yellow-500" },
  ];

  const containerRef = useRef();

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".course-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up-active");
          } else {
            entry.target.classList.remove("slide-up-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    
    <section className="w-full min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 overflow-hidden px-6 pt-20">
      
      {/* Background blur shapes */}
      <div className="absolute -top-32 -right-16 w-60 h-60 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-pink-400/15 rounded-full filter blur-2xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-yellow-400/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-400/10 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center" ref={containerRef}>
        <h1 className="text-5xl font-bold text-white text-center mb-12 glow-text">Available Courses</h1>
        {/* <p className="text-center text-gray-300 mb-12 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore alias optio ipsam nam distinctio necessitatibus, aliquam debitis culpa quaerat!
        </p> */}

        <div className="flex flex-col gap-12 w-full">
          {courses.map((course, index) => {
            const alignClass = index % 2 === 0 ? "self-start" : "self-end";
            return (
              <div
                key={course.title}
                className={`${alignClass} relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 cursor-pointer course-card`}
                style={{
                  backgroundImage: `url(${course.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors"></div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-64">
                  <h2 className="text-2xl font-bold text-white mb-2">{course.title}</h2>
                  <p className="text-gray-200 mb-4">{course.desc}</p>
                  <Link to={course.path} className={`inline-block px-4 py-2 text-white rounded-lg font-semibold ${course.btnColor}`}>
                    Lihat Selengkapnya &gt;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
