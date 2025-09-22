import express from "express"
import { getDetails, getFilterData } from "../controllers/controller.js"

let router = express.Router()

router.get("/", (req, res) => {
    res.redirect('/get-details')
})

router.get("/get-details", getDetails)

router.get("/filter", getFilterData)

export { router }