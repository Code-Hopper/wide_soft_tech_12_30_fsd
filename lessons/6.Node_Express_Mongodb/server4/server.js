import express, { urlencoded } from 'express'
import dotenv from "dotenv"
import ejs from "ejs"
import router from './routers/router.js'

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} || http://localhost:${port}`)
})

// http://localhost:5004/media/image.jpg

// {
//     name: "amey",
//         phone: "123465"
// }
// urlencoded
// name="amey"&phone="132465"

// data typecast into urlencoded

// RESTfull API
// HTTP/s methods 

// API

// Application1 -----> Application2
//               API
// Application1 <----- Application2

// API Client(Server, UI, etc...)