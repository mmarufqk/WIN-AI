import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Blur decorative circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between gap-12">
        {/* Branding */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <h2 className="text-3xl font-bold text-winai-blue">WinAI</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt modi qui ea natus porro?
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <Link to="/" className="hover:text-winai-blue transition">Home</Link>
          <Link to="/courses" className="hover:text-winai-blue transition">Courses</Link>
          <Link to="/about" className="hover:text-winai-blue transition">About</Link>
          <Link to="/contact" className="hover:text-winai-blue transition">Contact</Link>
          <Link to="/faq" className="hover:text-winai-blue transition">FAQ</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h3 className="font-semibold text-lg">Newsletter</h3>
          <p className="text-gray-300">Subscribe to get our latest updates and offers</p>
          <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md text-white placeholder-white focus:outline-none bg-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-winai-orange px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-indigo-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-red-500 transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-6 text-center text-gray-400 text-sm">
        © 2025 WinAI. All rights reserved. <Link to="/terms" className="hover:text-winai-blue transition">Terms</Link> | <Link to="/privacy" className="hover:text-winai-blue transition">Privacy</Link>
      </div>
    </footer>
  );
}
