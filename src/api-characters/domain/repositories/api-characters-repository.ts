export interface ApiCharacterRepository {

    getAll(): Promise<any>;

    getSingleCharacter(name: string): Promise<any>;

}