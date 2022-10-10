import { HttpClient } from "./http-client"

let http = new HttpClient()

http.get("https://httpstat.us/200").then(data => {
    console.log(data)
})
