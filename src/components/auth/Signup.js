import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const IP = process.env.REACT_APP_BACKEND_IP;

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const url = `${IP}/api/v1/auth/signup`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // redirect to home after signup
      navigate("/login");
    } else {
      setMessage(data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">

        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-center">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="p-3 mt-2 text-white transition bg-black rounded-lg hover:bg-gray-800"
          >
            Sign Up
          </button>

          {message && (
            <p className="text-sm text-center text-red-500">
              {message}
            </p>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-black underline hover:text-gray-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
