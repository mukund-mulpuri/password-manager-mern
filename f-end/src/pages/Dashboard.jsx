import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState([]);
  const [form, setForm] = useState({
    website: "",
    username: "",
    password: "",
  });

  // Protect dashboard + fetch passwords
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      fetchPasswords();
    }
  }, []);

  const fetchPasswords = async () => {
    try {
      const res = await api.get("/passwords");
      setPasswords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPassword = async (e) => {
    e.preventDefault();
    try {
      await api.post("/passwords/add", form);
      setForm({ website: "", username: "", password: "" });
      fetchPasswords();
    } catch (err) {
      alert("Failed to add password");
    }
  };

  const deletePassword = async (id) => {
    try {
      await api.delete(`/passwords/${id}`);
      fetchPasswords();
    } catch (err) {
      alert("Failed to delete password");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
      {/* TOP BAR */}
      <div className="top-bar">
        <h2>Hello 👋 Welcome back</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* ADD PASSWORD FORM */}
      <div className="form-card">
        <h3>Add Password</h3>
        <form onSubmit={addPassword}>
          <input
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>

      {/* PASSWORD LIST */}
      <h3>My Saved Passwords</h3>
      <div className="passwords">
        {passwords.length === 0 ? (
          <p>No passwords saved yet.</p>
        ) : (
          passwords.map((p) => (
            <div className="password-card" key={p._id}>
              <p>
                <b>Website:</b> {p.website}
              </p>
              <p>
                <b>Username:</b> {p.username}
              </p>
              <p>
                <b>Password:</b> {p.password}
              </p>
              <button onClick={() => deletePassword(p._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
