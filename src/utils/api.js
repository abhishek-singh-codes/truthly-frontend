import axios from "axios"

const IP = process.env.REACT_APP_BACKEND_IP;

const api = axios.create(
    {
        baseURL: `${IP}/api/v1`
    }
)

// attach token automatically 
api.interceptors.request.use((config)=>{
    const token = process.env.REACT_APP_AUTH_TOKEN
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api;