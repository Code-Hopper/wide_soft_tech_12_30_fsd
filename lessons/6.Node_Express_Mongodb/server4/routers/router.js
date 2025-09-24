import express from "express"
import { getHome, getAbout, postSubmitForm } from "../controllers/controller.js"

const router = express.Router()

router.get("/", getHome)
router.get("/about", getAbout)

router.post("/submit-form", postSubmitForm)

export default router 

// https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql