import axios from "axios";
import Cookies from "js-cookie";

const IP = process.env.REACT_APP_BACKEND_IP;

const api = axios.create({
    baseURL: `${IP}/api/v1`
});

// attach token automatically
api.interceptors.request.use((config) => {
    const token = Cookies.get("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// handle 401 globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // remove token
            Cookies.remove("access_token");

            // redirect to login
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;
