import Form from "../components/Form";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hackerrank.mp4";
import winaiLogo from "../assets/winai.png"; 

function Register() {
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
                        Welcome to <span className="text-indigo-400">WinAI</span> Community
                      </h2>
                      <p className="text-lg text-left">
                        Join thousands of learners and start your journey
                      </p>
                    </div>
                  </div>

            </div>

            <div className="md:w-45/100 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12">
                <div className="form-container bg-white relative overflow-hidden">
                    {/* <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div> */}

                    <h1 className="text-3xl font-extrabold mb-3">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Join us and start your learning adventure
                    </p>

                    <Form route="api/user/register/" method="register" />

                    <div className="flex items-center gap-4 my-6">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-gray-400 text-sm">or</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;

// import Form from "../components/Form";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-10 relative overflow-hidden">

//         {/* Decorative gradient circle */}
//         <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
//         <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

//         {/* Header */}
//         <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-3">
//           Create Account
//         </h1>
//         <p className="text-center text-gray-500 mb-10">
//           Join us and start your learning adventure
//         </p>

//         {/* Form */}
//         <div className="mb-8">
//           <Form route="api/user/register/" method="register" />
//         </div>

//         {/* Divider */}
//         <div className="flex items-center gap-4 mb-8">
//           <hr className="flex-1 border-gray-300" />
//           <span className="text-gray-400 text-sm">or</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
