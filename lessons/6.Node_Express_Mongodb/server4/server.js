import express from 'express'
import dotenv from "dotenv"
import ejs from "ejs"
import router from './routers/router.js'

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT

app.use(express.static("public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} || http://localhost:${port}`)
})

// http://localhost:5004/media/image.jpg