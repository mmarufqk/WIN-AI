import { useEffect, useState } from "react";
import heroVideo from "../assets/winai.mp4";

function HomeHero() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const texts = ["Win AI", "Winning AI for Everyone"]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    let index = 0;
    let typing = true;
    let pause = false;

    const interval = setInterval(() => {
      if (pause) return;

      const fullText = texts[currentIndex];

      if (typing) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          pause = true;
          setTimeout(() => {
            typing = false;
            pause = false;
          }, 2000); 
        }
      } else {
        setTypedText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          typing = true;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          pause = true;
          setTimeout(() => {
            pause = false;
          }, 1000);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [loaded, currentIndex]);

  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-winai-blue/40 animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        <p
          className={`text-winai-blue font-semibold uppercase tracking-wide transform transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Smart Solutions
        </p>

        <h1
          style={{ fontFamily: "Times New Roman, serif" }}
          className={`text-7xl md:text-8xl font-extrabold text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] transform transition-all duration-700 delay-150`}
        >
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-4 transform transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button className="bg-winai-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all">
            Get Started
          </button>
          <button className="bg-white/20 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default HomeHero;
