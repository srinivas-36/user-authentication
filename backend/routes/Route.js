import express from "express";
import { login, logout, signup, deleteUser,editUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.delete("/delete/:userId", deleteUser);
router.put("/edit/:userId", editUser); 

export default router;
