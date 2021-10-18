import { Character } from "../models/api-schema/character-schema";
import { ApiCharacterRepository } from "../repositories/api-characters-repository";

class ApiCharacterService implements ApiCharacterRepository {


    constructor() {
            
    }
    getAll(): Array<Character[]> {
        return [];
    }

}