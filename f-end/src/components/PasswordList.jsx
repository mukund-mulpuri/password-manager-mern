const PasswordList = () => {
  // temporary dummy data
  const passwords = [
    { id: 1, website: "Google", username: "abc@gmail.com" },
    { id: 2, website: "GitHub", username: "coder123" },
  ];

  return (
    <div className="password-list">
      <h3>Saved Passwords</h3>

      {passwords.map((item) => (
        <div key={item.id} className="password-card">
          <p>
            <b>Website:</b> {item.website}
          </p>
          <p>
            <b>Username:</b> {item.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PasswordList;
