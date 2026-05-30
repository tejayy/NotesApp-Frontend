// src/pages/auth/RegisterPage.tsx

import { useState } from "react";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        <form className="space-y-4">
          <input
            placeholder="Name"
            className="w-full p-3 rounded bg-slate-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
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

          <button className="w-full bg-green-600 p-3 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
