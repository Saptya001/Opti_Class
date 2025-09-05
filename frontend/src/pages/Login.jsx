import React, { useState } from "react";
import Button from "../components/Button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted:", form);
    // 🔗 Later: Call authService.login(form)
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="primary" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
