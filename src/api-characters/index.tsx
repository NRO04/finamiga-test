import {ApiCharacterService} from "./domain/services/api-character-service";
import {useEffect, useState} from "react";
import {Character} from "./domain/models/api-schema/character-schema";
import CharacterInfo from "./infrastructure/components/Character-Info";


const SERVICE = {"CHARACTER-SERVICE": new ApiCharacterService()}

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
        <div>
            {characters.map((el) =>
                <CharacterInfo {...el}/>
            )}
        </div>
    );

}
export default ApiCharacters;