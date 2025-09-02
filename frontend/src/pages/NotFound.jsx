import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden p-8">
      
      {/* Background blur circles */}
      <div className="absolute -top-32 -right-16 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse pointer-events-none"></div>

      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-12 text-center max-w-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-700 text-lg mb-6">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
