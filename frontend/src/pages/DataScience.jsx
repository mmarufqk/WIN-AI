import Navbar from "../components/Navbar";

function DataScience() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-600 text-white overflow-hidden">
        <Navbar />
      {/* Subtle background shapes */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300/10 rounded-full filter blur-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-[6rem] md:text-[8rem] font-extrabold tracking-widest text-white drop-shadow-lg mb-6">
          Data Science
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas fuga animi dolor quis delectus quas excepturi consectetur ex ab sint inventore, non reiciendis quasi beatae eos, enim qui. Accusamus!
        </p>
        <button className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition">
          Mulai Belajar
        </button>
      </div>
    </div>
  );
}

export default DataScience;
