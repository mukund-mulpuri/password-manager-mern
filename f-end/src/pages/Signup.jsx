import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";
import "./Auth.css";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Signup successful. Please login.");
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
