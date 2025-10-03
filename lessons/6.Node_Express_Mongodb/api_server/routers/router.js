import express from "express"
import { checkAdmin } from "../middlewares/checkAdmin.js"
import { getDetails, getFilterData, getRandomLanguage, getAllLanaguages, getLanguageBasedOnId, postAddLanaguage } from "../controllers/controller.js"

let router = express.Router()

router.get("/", (req, res) => {
    res.redirect('get-details')
})

router.get("/all", getAllLanaguages)

router.get("/get-details", getDetails)

router.get("/filter", getFilterData)

router.get("/random/language", getRandomLanguage)

router.get("/get-language/:id", getLanguageBasedOnId)

router.post("/add-language", checkAdmin, postAddLanaguage)

export { router }