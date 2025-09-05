import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(form);
    setLoading(false);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed. Please try again.");
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="********"
          />
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-full" disabled={loading}>
          {loading ? <Loader size="sm" /> : "Login"}
        </Button>

        {/* Extra Links */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
