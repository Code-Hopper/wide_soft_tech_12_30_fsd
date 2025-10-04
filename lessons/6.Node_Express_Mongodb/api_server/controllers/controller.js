// import { languages } from "../data/Languages.js"
import { techModel } from "../models/techSchema.js"

let languages = []

async function fetchInitialLanguages() {
    try {
        languages = await techModel.find({})
    } catch (err) {
        console.log(err)
        languages = []
    }
}

fetchInitialLanguages()

const getDetails = (req, res) => {
    res.status(200).json({
        message: "Welcome to Languages API, you can search/query for a language based on scope, duration & difficulties and also search for a perticular language base on id(1 to 50)",
        routes: [
            {
                method: "GET",
                address: "localhost/languages/api/random/language",
                expectedResult: "Array"
            },
            {
                method: "GET",
                address: "localhost/languages/api/all",
                expectedResult: "Array"
            },
            {
                method: "GET",
                address: "localhost/languages/api/get-language/{:id}",
                expectedResult: "object/error"
            },
            {
                method: "GET",
                address: "localhost/languages/api/filter?scope=value",
                expectedResult: "Array/Null",
                queryOptions: [
                    "scope", "duration[in weeks]", "difficulties[Easy,Medium,Hard]"
                ],
                possibleScopes: [
                    "Web development", "Full-stack", "Mobile apps", "AI", "ML", "Data science", "Scripting", "Enterprise apps", "Android", "Backend systems", "System programming", "Embedded systems", "OS", "Game dev", "High-performance apps",
                    "System software", "Desktop apps", "CMS (WordPress, Drupal)", "Cloud", "Distributed systems", "Web assembly", "Blockchain", "Modern JVM apps", "iOS",
                    "macOS apps", "Scalable web apps", "Angular", "React apps", "Databases", "Queries", "Data analysis", "Statistics", "Visualization", "Big data", "Functional programming", "Text processing", "Legacy iOS apps", "Engineering", "Simulation", "Scientific computing",
                    "Research",
                    "Compilers",
                    "Automation",
                    "Linux administration",
                    "Windows automation",
                    "DevOps",
                    "Real-time systems",
                    "Telecom",
                    "Simulations",
                    "Banking",
                    "Finance",
                    "JVM ecosystem",
                    ".NET ecosystem",
                    "Low-level programming",
                    "Smart contracts (Ethereum)",
                    "Hardware design",
                    "FPGA programming",
                    "Digital circuits",
                    "Logic programming",
                    "Military",
                    "Avionics",
                    "OOP",
                    "Cross-platform development",
                    "Fast scripting",
                    "Facebook’s HHVM ecosystem",
                    "SAP systems",
                    "Quantum computing",
                    "Math-heavy programming",
                    "Legacy systems",
                    "Educational programming",
                    "Basics",
                    "Beginner education",
                    "Kids programming"
                ]
            },
            {
                method: "POST",
                address: "localhost/languages/api/add-language",
                expectedResult: "can accept Json and Form Data"
            }
        ]
    })
}


const getFilterData = (req, res) => {
    try {
        let { scope, duration, difficulties } = req.query

        let userScope = scope

        if (!scope && !duration && !difficulties) throw ("filter is invalid !")

        let resultArray = languages

        let queryType = ""

        if (scope) {
            resultArray = resultArray.filter((language) => {
                return language.scope.some((element) => element.toLowerCase() == userScope.toLowerCase().trim())
            })
            queryType += "/scope"
        }

        if (duration) {
            resultArray = resultArray.filter((language) => {
                // check for type casting
                return Number(language.duration) <= Number(duration)
            })
            queryType += "/duration"
        }

        if (difficulties) {
            resultArray = resultArray.filter((language) => {
                // check for type casting
                return language.difficulties.toLowerCase() == difficulties.toLowerCase().trim()
            })
            queryType += "/difficulties"
        }

        if (resultArray.length == 0) throw (`unable to find languages based on ${queryType}`)

        res.status(200).json({ message: `got result based on ${queryType}`, resultCount: resultArray.length, results: resultArray })

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "unable to get data based on filter !", err, possibleFilters: ["?scope", "?duration", "?difficulties"] })
    }
}

const getRandomLanguage = (req, res) => {
    let randomNumber = Math.floor((Math.random() * 50) + 1)
    let result = languages.filter((language) => {
        return language.id == randomNumber
    })
    res.status(200).json({ message: "random language you were requesting is ", result })
}

const getAllLanaguages = async (req, res) => {
    try {

        // fetch all languages

        let dataBaselanguages = await techModel.find({})

        if (dataBaselanguages.length == 0) throw ("unable to fetch all languages at this moment !")

        res.status(200).json({ message: 'all the languages within the dataset are.', dataBaselanguages })

    } catch (err) {
        console.log("error while fetching languages : ", err)
        res.status(500).json({ message: "unable to find languages", err })
    }
}

const getLanguageBasedOnId = (req, res) => {
    try {
        let { id } = req.params

        if (!id) throw ("invalid id !")

        let result = languages.filter((language) => {
            return language.id == id
        })

        if (result.length == 0) throw (`unable to find language.id ${id}`)

        res.status(200).json({ message: `we have on id ${id} !`, result: result[0] })

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: `unable to get data based on id !`, err })
    }
}

const postAddLanaguage = async (req, res) => {
    try {

        if (!req.user) throw ("trying to add a language without login ! Please login first.")

        let { title, scope, duration, difficulties } = req.body

        // scope has to be ann array
        if (!title || !scope || !duration || !difficulties) throw ("invalid/incomplete data !")

        if (!Array.isArray(scope)) throw ("invalid data scope has to be an array !")

        let newTech = new techModel({ title, scope, duration, difficulties })

        await newTech.save()

        res.status(202).json({ message: `new language ${title} addedd successfully !` })

        fetchInitialLanguages()

    } catch (err) {
        console.log('err while adding a new language !', err)
        res.status(400).json({ message: `unable to new language !`, err })
    }
}

// insert, update, delete

export { getDetails, getFilterData, getRandomLanguage, getAllLanaguages, getLanguageBasedOnId, postAddLanaguage }