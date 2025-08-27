// js promises

function getData(name) {
    let myPromise = new Promise((resolve, reject) => {
        if (name == "Amey") {
            setTimeout(() => {
                resolve(
                    {
                        message: "promise is resolved",
                        data: {
                            name: "amey khonekar",
                            phone: 9766696550
                        }
                    }
                )
            }, [2000])
        } else {
            setTimeout(() => {
                reject(
                    {
                        message: "name not matched this promise is rejected !"
                    }
                )
            }, [5000])
        }
    })
    return myPromise
}

// in js there are 2 methods to handle a promise 

// then , catch and finally 

// getData("some name").then((resolve) => {
//     console.log("promise is resolved : ")
//     console.log(resolve)
// }).catch((reject) => {
//     console.log("promise is rejected : ")
//     console.log(reject)
// }).finally(() => {
//     console.log("promise completed !")
// })

// getData("Amey").then((resolve) => {
//     console.log("promise is resolved 2 : ")
//     console.log(resolve)
// }).catch((reject) => {
//     console.log("promise is rejected : ")
//     console.log(reject)
// }).finally(() => {
//     console.log("promise completed !")
// })

// funtion().then().catch()

// async & await (has to assigned to a function)

let handlePromise = async (passing_name) => {
    try {
        let result = await getData(passing_name)
        console.log(result)
    } catch (err) {
        console.log('promise has been rejected ')
        console.error(err)
    }
}
handlePromise("Amey")
handlePromise("amey")
handlePromise("123")