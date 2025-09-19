let persons = [
    { name: "person 1", phone: 123456 },
    { name: "person 2", phone: 789101112 },
    { name: "person 3", phone: 78676544 },
    { name: "person 4", phone: 6577415 },
    { name: "person 5", phone: 88570322 },
]

let getHome = (req, res) => {
    // res.status(200).send("welcome to home page")
    // res.status(200).sendFile("index.html")
    res.status(200).render("index", { data: "hello 123", data2: true, data3: persons, kuch: "kuch bhi" })
}

let getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

let postSubmitForm = (req, res) => {
    // console.log(req)
    console.log(req.body)
    // if we are recieving form data it is always inside of req.body
    res.status(301).redirect("/")
}

export { getHome, getAbout, postSubmitForm }