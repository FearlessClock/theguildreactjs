import {UserAuthentication} from "../Types/UserAuthentication.ts";

export default function authHeader() {
    const userStr = localStorage.getItem("userToken");

    let user : UserAuthentication = {token: "", id: 0};
    if (userStr)
        user = JSON.parse(userStr);

    if (user && user.token) {
        console.log('token ' + user.token)
        return { Authorization: 'token ' + user.token };
    } else {
        return { Authorization: '' };
    }
}