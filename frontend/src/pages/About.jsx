import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 overflow-hidden px-6">
      
      {/* Background blur shapes */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full filter blur-2xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-yellow-400/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center text-white z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 glow-text">
          About Win AI
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est ratione nam officia sunt impedit eos, minima quos praesentium pariatur!
        </p>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum reprehenderit id? Fuga quae laboriosam, ab aperiam voluptates aspernatur sunt earum quod magni minima ipsa commodi ea eius corrupti accusamus sint eos minus veniam ratione? Possimus magnam sunt nam tenetur.
        </p>
        <button className="bg-winai-orange px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}

export default About;
