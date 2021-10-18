import {Character} from '../../domain/models/api-schema/character-schema';

export default function CharacterInfo({name, id,...rest}: Character) {

    return (
        <div>
            {name} {id}
        </div>
    );
}