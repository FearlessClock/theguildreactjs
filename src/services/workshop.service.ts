import axios from "axios";
import authHeader from "./auth-header";
import {Cart} from "../Types/Cart.ts";
import {Workshop} from "../Types/Workshop.ts";

const API_URL = "http://localhost:8000/api/";

export const getWorkshops = async (countryId: number) => {
    const getResponse = await axios.get(API_URL + "workshop/country/" + countryId + "/", {headers: authHeader()});
    console.log(getResponse);
    const workshop : Workshop = getResponse.data;
    return workshop;
}

export const getCarts = async (workshopId: number) => {
const getResponse = await axios.get(API_URL + "carts/workshop/" +workshopId+ "/", { headers: authHeader() });
    console.log(getResponse);
    const carts : Cart[] = getResponse.data;
    return carts;
};