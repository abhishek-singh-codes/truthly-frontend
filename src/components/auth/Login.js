import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      credentials: "include", // IMPORTANT for cookies
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/"); // go to feed
    } else {
      setError(data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col w-1/3 gap-4 p-6 bg-white border rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
            required
            className="p-2 border rounded-md outline-black"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="p-2 border rounded-md outline-black"
          />

          <button
            type="submit"
            className="p-2 text-white transition duration-300 bg-black rounded-md hover:bg-gray-800"
          >
            Login
          </button>

          {error && <h3 className="text-sm text-red-500">*{error}</h3>}
        </form>
      </div>
    </div>
  );
};

export default Login;
