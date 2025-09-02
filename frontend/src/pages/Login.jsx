import Form from "../components/Form";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hackerrank.mp4";
import winaiLogo from "../assets/winai.png";

function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-55/100 relative items-center justify-center">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        z-10 w-4/5 h-[700px] text-white 
                        flex flex-col justify-between p-8 rounded-xl">
          <img 
            src={winaiLogo} 
            alt="WinAI Logo" 
            className="w-30" 
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-left">
              Welcome Back to <span className="text-indigo-400">WinAI</span>
            </h2>
            <p className="text-lg text-left">
              Log in to continue your learning journey
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-45/100 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
        <div className="form-container bg-white relative overflow-hidden">
          <h1 className="text-3xl font-extrabold mb-3 text-center">
            Log In
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            Log in to continue your learning journey
          </p>
          <Form route="api/token/" method="login" />
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
