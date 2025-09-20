let getHome = (req, res) => {
    try {
        // console.log(req.query.name)
        // console.log(req.query.phone)
        let { name, phone } = req.query

        // t f -> f || t -- t

        if (!name || !phone) throw ("requested data was not found please send name and phone number !")

        // query parameters
        console.log(name)
        console.log(phone)
        res.status(200).json({ message: `hello ${name} !` })
    } catch (err) {
        console.log("an error occured ", err)
        res.status(400).json({ message: err })
    }
}

let getSomewhere = (req, res) => {
    console.log(req.params)
    let { name } = req.params
    res.status(200).json({ message: "this is somewhere !" })
}

export { getHome, getSomewhere }

// Query
// Search, Bulk Get
// Path
// search(Update[based on id]), delete, if we want single element in return