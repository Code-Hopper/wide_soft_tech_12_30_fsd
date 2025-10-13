import express from "express"
import dotenv from "dotenv"
import "./database/conn.js"
import { router } from "./routers/router.js"
import mongoose from "mongoose"
import { userRouter } from "./routers/userRouter.js"
import cors from "cors"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 5005

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static("public"))

let corsOptions = {
    origin: "*",
    method: "*"
}

app.use(cors(corsOptions))

app.get('/', (req, res) => { res.redirect("/languages/api/get-details") })

app.use("/languages/api", router)

app.use("/user/api", userRouter)

app.get("/test/hello", (req, res) => {
    res.status(200).json({ message: "reached backend test route !", checkCode: true, userData: { name: "amey khondekar", phone: 9766696550 } })
})

app.use((req, res) => {
    console.log("someone is trying to access a 404 route !")
    res.status(404).json({ message: "content not found !" })
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})

// [GET/POST/PUT/PATCH/DELET ] /endpoint/

// file uploads, mailer

// cors -> cross origin resource sharing 