import express from "express"
import { handleRegisterUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register", handleRegisterUser)

export { userRouter }