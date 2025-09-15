import express from "express"

let app = express()

let port = 5000

app.get("/",(request,response)=>{
    response.send("welcome to our node server !")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})