import axios from "axios"

// url: http://192.168.42.75/api/v1
// url: https://619a5e9a27827600174451fa.mockapi.io/api/v1/

export const API = axios.create({
    baseURL: "https://savetime-api.herokuapp.com/api/v1"
})