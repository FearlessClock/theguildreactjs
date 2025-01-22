import axios from "axios";
import authHeader from "./auth-header";
import {Country} from "../Types/Country.ts";
import {Profession} from "../Types/Profession.ts";

const API_URL = "http://localhost:8000/api/";

export const getCountries = async () => {
    const getResponse = await axios.get(API_URL + "country/", { headers: authHeader() });
    console.log(getResponse);
    const countries : Country[] = getResponse.data;
    return countries;
};

export const getProfessions = async () => {
    const getResponse = await axios.get(API_URL + "professioninformation/", { headers: authHeader() });

    const professions : Profession[] = getResponse.data;
    return professions;
};