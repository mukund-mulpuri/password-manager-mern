import { useState } from "react";

const PasswordForm = () => {
  const [form, setForm] = useState({
    website: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later send to backend
    setForm({ website: "", username: "", password: "" });
  };

  return (
    <form className="password-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        placeholder="Website"
        value={form.website}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="username"
        placeholder="Username / Email"
        value={form.username}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Password</button>
    </form>
  );
};

export default PasswordForm;
