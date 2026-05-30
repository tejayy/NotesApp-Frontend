// src/pages/auth/LoginPage.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import api from "../../api/axios";
import toast from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("auth/login", { email, password });

      setToken(response.data.token);
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid Creds");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-slate-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 p-3 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center mt-4">
            No account?
            <Link to="/register" className="text-blue-400 ml-2">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
