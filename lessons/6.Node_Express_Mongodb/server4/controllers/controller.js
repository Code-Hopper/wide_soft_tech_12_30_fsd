let getHome = (req, res) => {
    // res.status(200).send("welcome to home page")
    // res.status(200).sendFile("index.html")
    res.status(200).render("index")
}

let getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

export { getHome, getAbout }