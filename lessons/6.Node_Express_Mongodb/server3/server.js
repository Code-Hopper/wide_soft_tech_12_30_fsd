import express from "express"
import dotenv from "dotenv"
import router from "./routers/router.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 5005

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})