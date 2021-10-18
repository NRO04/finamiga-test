import {character} from '../../domain/models/api-schema/character-schema';

export default function CharacterInfo({name, id}: character) {

    return (
        <div>
            {name} {id}
        </div>
    );
}