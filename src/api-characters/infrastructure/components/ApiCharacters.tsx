import {useEffect, useState} from "react";
import {Character} from "../../domain/models/api-schema/character-schema";
import {ApiCharacterService} from "../../domain/services/api-character-service";
import CharacterInfo from "./Character-Info";

const SERVICE = {"CHARACTER-SERVICE": new ApiCharacterService()}
const UTILS = {'UTILS-SERVICE': ''}

const ApiCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const getCharacters = async () => {
        const {results} = await SERVICE["CHARACTER-SERVICE"].getAll();
        setCharacters(results);
    }
    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <>
            {characters.map((el: Character) =>
                <CharacterInfo {...el} key={el.id}/>
            )}
        </>
    );

}
export default ApiCharacters;

