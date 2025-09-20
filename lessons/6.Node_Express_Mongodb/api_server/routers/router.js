import express from "express"
import { getHome, getSomewhere } from "../controllers/controller.js"

let router = express.Router()

router.get("/", getHome)

router.get("/somewhere/:name/:phone", getSomewhere)

export { router }