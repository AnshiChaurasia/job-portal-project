import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
import multer from "multer";

const router = express.Router();

// Middleware for handling multiple file fields
const fieldsUpload = multer({ storage: multer.memoryStorage() }).fields([
    { name: 'file', maxCount: 1 },
    { name: 'profilePhoto', maxCount: 1 }
]);

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, fieldsUpload, updateProfile);

export default router;