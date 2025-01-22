import axios from "axios";
import authHeader from "./auth-header.ts";
import {Character} from "../Types/Character.ts";
import {UserAuthentication, UserFullInformation} from "../Types/UserAuthentication.ts";

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
            if (response.data.token) {
                GetFullUserinfo().then((userFullInformationResponse) => {
                    localStorage.setItem("user", JSON.stringify(userFullInformationResponse));
                    console.log("Full user info: ", JSON.stringify(userFullInformationResponse));
                })
                localStorage.setItem("userToken", JSON.stringify(response.data));
                console.log("User token: ", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const GetFullUserinfo = async () => {
    const getResponse = await axios.get(API_URL + "user/"+getCurrentUserToken().id+"/", { headers: authHeader() });

    const user : UserFullInformation = getResponse.data;
    return user;
}

export const logout = () => {
    localStorage.removeItem("token");
};

export const GetCurrentUserInformationWithPromise = async () =>{
    var userStr = localStorage.getItem("user");
    if(userStr)
    {
        return JSON.parse(userStr);
    }
    else if(getCurrentUserToken() != null){
        await GetFullUserinfo().then((userFullInformationResponse) => {
            localStorage.setItem("user", JSON.stringify(userFullInformationResponse));
            console.log("Full user info: ", JSON.stringify(userFullInformationResponse));
        })
        userStr = localStorage.getItem("user");
        if(userStr) return JSON.parse(userStr);
    }

    return null;
}

export const getCurrentUserToken = () => {
    const userStr = localStorage.getItem("userToken");
    if (userStr) return JSON.parse(userStr);

    return null;
};