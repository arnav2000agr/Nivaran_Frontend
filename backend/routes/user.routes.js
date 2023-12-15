import express from "express"

import {
    createUser,
    sendotp,
    verifyotp,
    loginUser,
    logoutUser,
    getAllUsers,
    getUserById
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/sendotp").post(sendotp)
router.route("/verifyotp").post(verifyotp)
router.route("/create").post(createUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)
router.route("/getallusers").get(getAllUsers)
router.route("/getuser/:id").get(getUserById)


export default router;