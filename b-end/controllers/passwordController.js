import Password from "../models/Password.js";

export const addPassword = async (req, res) => {
  try {
    const { website, username, password } = req.body;

    const newPassword = new Password({
      userId: req.user.id,
      website,
      username,
      password,
    });

    await newPassword.save();
    res.status(201).json({ message: "Password saved" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ userId: req.user.id });
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ THIS WAS MISSING
export const deletePassword = async (req, res) => {
  try {
    await Password.deleteOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    res.json({ message: "Password deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
