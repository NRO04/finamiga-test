import axios from "axios";
import { UtilsService } from "../../../utils/domain/services/utils-service";
import { ApiCharacterRepository } from "../repositories/api-characters-repository";

export class ApiCharacterService implements ApiCharacterRepository {

    http_client: any;
    utils: any;

    constructor() {
        this.http_client = axios;
        this.utils = { "UTILS-SERVICE": new UtilsService() }
    }

    async getAll(): Promise<any> {

        let getNumber: number = this.utils["UTILS-SERVICE"].generateRandomNum(1, 10);

        try {
            const response = await this.http_client.get(`${process.env.REACT_APP_BASE_API_URL}/character?page=${getNumber}`);
            return response.data;
        } catch (error) {
            console.log("Error", error);
        }
    }

    async getSingleCharacter(name: string): Promise<any> {

        try {
            const response = await this.http_client.get(`${process.env.REACT_APP_BASE_API_URL}/character/?name=${name}`);
            return response.data;
        } catch (error) {
            console.log("ERROR", error)
        }

    }

}