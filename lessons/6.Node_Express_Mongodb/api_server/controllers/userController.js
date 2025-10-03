import { userModel } from "../models/userSchema.js";

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

export { handleRegisterUser }