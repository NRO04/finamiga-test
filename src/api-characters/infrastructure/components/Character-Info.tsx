import {Character} from '../../domain/models/api-schema/character-schema';

export default function CharacterInfo({image, name, species, status, origin}: Character) {

    return (
        <div className="item">
            <div className="grid grid-template-col-2">
                <div className="flex flex-dir-col jc-center align-i-center">
                    <img style={{"width": "105px", "clipPath": "circle(50%)"}} src={image} alt={name}/>
                </div>
                <div className="flex flex-dir-col jc-center align-i-fx-start">
                    <div>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        Status: {status}
                    </div>
                    <div>
                        Species: {species}
                    </div>
                    <div>
                        Origin: {origin.name}
                    </div>
                </div>
            </div>
        </div>
    );
}