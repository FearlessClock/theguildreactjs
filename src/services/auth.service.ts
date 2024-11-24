import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

export const register = (name: string, username: string, email: string, password: string) => {
    return axios.post(API_URL + "register/", {
        name,
        username,
        email,
        password,
    });
};

export const login = (username: string, password: string) => {
    return axios
        .post(API_URL + "user_login/", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};