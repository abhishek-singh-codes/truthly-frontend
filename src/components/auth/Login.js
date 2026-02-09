import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const IP = process.env.REACT_APP_BACKEND_IP;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const url = `${IP}/api/v1/auth/login`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/");
    } else {
      setError(data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-center">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="p-3 mt-2 text-white transition bg-black rounded-lg hover:bg-gray-800"
          >
            Login
          </button>

          {error && (
            <p className="text-sm text-center text-red-500">
              *{error}
            </p>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Signup link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-black underline hover:text-gray-700"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
