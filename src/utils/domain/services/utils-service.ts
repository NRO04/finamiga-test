import {UtilsRepository} from "../repositories/utils-repository";

export class UtilsService implements UtilsRepository {

    generateRandomNum(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}