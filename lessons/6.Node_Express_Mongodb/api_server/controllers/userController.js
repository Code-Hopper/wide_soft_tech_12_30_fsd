import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let handleRegisterUser = async (req, res) => {
    try {
        let { name, phone, email, address, password } = req.body

        if (!name || !phone || !email || !address || !password) throw ("Incomplete data. Cannot Register User !")

        // users with same email/phone

        let userExists = await userModel.findOne({ $or: [{ "email": email }, { "phone": phone }] })

        if (userExists) throw ("email/phone already registred please enter a different email/phone or please head to login.")

        let newUser = new userModel({ name, phone, email, address, password })

        await newUser.save()

        res.status(202).json({ message: `Successfully Registreded user with email ${email}` })

    } catch (err) {
        console.log('error while registering the user  : ', err)
        res.status(400).json({ message: "unable to register user", err })
    }
}

const handleLoginUser = async (req, res) => {
    try {

        let { email, password } = req.body

        if (!email || !password) throw ({ message: 'incomplete/invalid data', status: 400 })

        let user = await userModel.findOne({ "email": email })

        if (!user) throw ({ message: `user not found with email ${email}. Please register the user first.`, status: 404 })

        let validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) throw ({ message: `incorret email/password !`, status: 401 })

        let playLoad = { email: user.email }

        let token = await jwt.sign(playLoad
            , process.env.JWT_SECRET, { expiresIn: "12hr" })

        res.status(202).json({ message: "login successfull !", token })

    } catch (err) {
        console.log("error while login : ", err)
        res.status(err.status || 401).json({ message: err.message || "unable to login at this moment. Please try again later !", err })
    }
}

export { handleRegisterUser, handleLoginUser }