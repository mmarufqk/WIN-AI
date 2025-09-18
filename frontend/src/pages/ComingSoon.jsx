import { motion } from "framer-motion";

function ComingSoon() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 overflow-hidden px-6">
      
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full filter blur-2xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-yellow-400/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          🚀 Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Halaman ini sedang dalam pengembangan.  
          Nantikan update terbaru dari <span className="text-winai-orange font-semibold">Win AI</span>.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-winai-orange px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          Kembali
        </button>
      </motion.div>
    </section>
  );
}

export default ComingSoon;
