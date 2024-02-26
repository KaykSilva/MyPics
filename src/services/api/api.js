import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.waifu.pics'
})

export default api