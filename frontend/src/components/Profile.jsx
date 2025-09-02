import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    api.get("/api/user/profile/")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-gray-600 text-lg animate-pulse">Loading profile...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-lg">Failed to load profile.</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6 mt-14">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={user.avatar || "/assets/profile.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="pt-20 pb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 text-lg">{user.email}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 pb-10">
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-gray-700">Courses Taken</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-yellow-600">4</p>
            <p className="text-gray-700">Achievements</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-green-600">120h</p>
            <p className="text-gray-700">Learning Hours</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex justify-center space-x-6 py-4">
            {["overview", "courses", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-4 font-semibold ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-indigo-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="px-10 pb-10">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold text-gray-800">
                  Recent Activity
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kamu baru saja menyelesaikan kursus <b>React JS</b>.</li>
                  <li>Mendapatkan badge <b>Top Learner</b>.</li>
                </ul>
              </motion.div>
            )}
            {activeTab === "courses" && (
              <motion.div
                key="courses"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-600">
                  Daftar kursusmu akan muncul di sini.
                </p>
              </motion.div>
            )}
            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <Link
                  to="/profile/edit"
                  className="block bg-indigo-600 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-700 transition"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/logout"
                  className="block bg-red-500 text-white py-2 px-4 rounded-lg text-center hover:bg-red-600 transition"
                >
                  Logout
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Profile;
