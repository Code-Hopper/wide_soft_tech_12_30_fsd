import axios from "axios"

let baseUrl = `${import.meta.env.VITE_API_URL}/test`

export async function fetchData() {
    try {
        let result = await axios({
            method: "GET",
            url: `${baseUrl}/hello`
        })
        return result
    } catch (err) {
        throw err
    }
}