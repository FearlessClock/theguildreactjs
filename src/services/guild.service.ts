import axios from "axios";
import authHeader from "./auth-header.ts";
import {Workshop} from "../Types/Workshop.ts";
import {Character} from "../Types/Character.ts";
import {Profession} from "../Types/Profession.ts";

const API_URL = "http://localhost:8000/api/";

export const CreateWorkshop = async (workshop: Workshop) => {
    const postRepsonse = await axios.post(API_URL + "workshop/", workshop, {headers: authHeader()});
}

export const CreateCharacter = async (character: Character) => {
    const postRepsonse = await axios.post(API_URL + "character/", character, {headers: authHeader()});
    console.log(postRepsonse);
}

export const GetCharacters = async () => {
    const getResponse = await axios.get(API_URL + "character/", { headers: authHeader() });

    const characters : Character[] = getResponse.data;
    return characters;
}