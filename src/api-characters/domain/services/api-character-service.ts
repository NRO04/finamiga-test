import axios from "axios";
import {Character} from "../models/api-schema/character-schema";
import {ApiCharacterRepository} from "../repositories/api-characters-repository";

export class ApiCharacterService implements ApiCharacterRepository {

    http_client: any;

    constructor() {
        this.http_client = axios;
    }

    async getAll(): Promise<any> {
        try {
            const response = await this.http_client.get(`${process.env.REACT_APP_BASE_API_URL}/character`);
            return response.data;
        } catch (error) {
            console.log("Error", error);
        }
    }

}