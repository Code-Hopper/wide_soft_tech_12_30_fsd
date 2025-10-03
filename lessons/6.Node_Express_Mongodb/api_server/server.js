import express from "express"
import dotenv from "dotenv"
import "./database/conn.js"
import { router } from "./routers/router.js"
import mongoose from "mongoose"
import { userRouter } from "./routers/userRouter.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 5005

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static("public"))

app.get('/', (req, res) => { res.redirect("/languages/api/get-details") })

app.use("/languages/api", router)

app.use("/user/api", userRouter)

app.use((req, res) => {
    console.log("someone is trying to access a 404 route !")
    res.status(404).json({ message: "content not found !" })
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})