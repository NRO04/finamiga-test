import { useEffect, useState } from "react";
import { Character } from "../../domain/models/api-schema/character-schema";
import { ApiCharacterService } from "../../domain/services/api-character-service";
import CharacterInfo from "./Character-Info";


type Params = {
    CharacterName?: string | undefined;
}

const SERVICE = { "CHARACTER-SERVICE": new ApiCharacterService() }

const ApiCharacters = ({ CharacterName }: Params) => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const getCharacters = async () => {
        const { results } = await SERVICE["CHARACTER-SERVICE"].getAll();
        setCharacters(results);
    }

    const getSingleCharacter = async (name: string) => {

        const { results } = await SERVICE["CHARACTER-SERVICE"].getSingleCharacter(name);
        setCharacters(results);
    }


    useEffect(() => {

        if (CharacterName) {
            getSingleCharacter(CharacterName);
        } else {
            getCharacters();
        }
    }, [CharacterName])

    return (
        <>
            {characters.map((el: Character) =>
                <CharacterInfo {...el} key={el.id} />
            )}
        </>
    );

}
export default ApiCharacters;

