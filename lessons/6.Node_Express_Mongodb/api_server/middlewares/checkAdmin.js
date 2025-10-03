let checkAdmin = async (req, res, next) => {
    try {

        // decoded token

        console.log(req.headers)
        let { admin } = req.headers
        if (!admin) throw ("not a valid admin !")
        next()
    } catch (err) {
        console.log("error from checkAdmin middleware : ", err)
        res.status(401).json({ message: "failed to execute process !", err })
    }
}

export { checkAdmin }

// form data(body), json(body), query,path, header, 

// login -> token -> token as header -> actions

// register / login 

// encryption (Bcrypt), token(JWT), sessions, otp(email)[nodemailer-SMTP], auth 