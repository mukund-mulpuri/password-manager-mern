import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addPassword,
  getPasswords,
  deletePassword,
} from "../controllers/passwordController.js";

const router = express.Router();

router.post("/add", authMiddleware, addPassword);
router.get("/", authMiddleware, getPasswords);
router.delete("/:id", authMiddleware, deletePassword);

export default router;
