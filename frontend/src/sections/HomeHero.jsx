import { useEffect, useState } from "react";
import heroVideo from "../assets/winai.mp4";

function HomeHero() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Win AI";

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

      if (typing) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          pause = true;
          setTimeout(() => {
            typing = false;
            pause = false;
          }, 3000); 
        }
      } else {
        setTypedText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          typing = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        
        <p className={`text-winai-blue font-semibold uppercase tracking-wide transform transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          Lorem Ipsum
        </p>

        <h1
          style={{ fontFamily: 'Times New Roman, serif' }}
          className={`text-5xl md:text-6xl font-extrabold text-white glow-text transform transition-all duration-700 delay-150`}
        >
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        <p className={`text-white text-lg md:text-xl max-w-xl transform transition-all duration-700 delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod nam perspiciatis in, iste debitis dolores optio laborum quisquam molestiae.
        </p>

        <button className={`mt-4 bg-winai-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-700 delay-500 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HomeHero;
