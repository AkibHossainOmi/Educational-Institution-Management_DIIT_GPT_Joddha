import axios from "axios";

// Base URL for your API
const BASE_URL = "http://localhost:8000/api/"; // Replace with your actual base API URL

// Utility to get the JWT token from localStorage (or cookies if you prefer)
const getAuthToken = () => {
    return localStorage.getItem("token"); // You can also use cookies here
};

// Create an Axios instance with default settings
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to include the JWT token in the Authorization header
api.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token expired or invalid
            // Redirect to login page or perform token refresh logic
            window.location.href = "/login"; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

// API methods
export const login = async (email, password) => {
    try {
        const response = await api.post("/login", { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserProfile = async () => {
    try {
        const response = await api.get("/user/profile");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Export other common API calls here
