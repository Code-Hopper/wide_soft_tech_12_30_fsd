import express from "express"
import { handleRegisterUser, handleLoginUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register", handleRegisterUser)

userRouter.post("/login", handleLoginUser)

export { userRouter }