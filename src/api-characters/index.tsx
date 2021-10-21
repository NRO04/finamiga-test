import ApiCharacters from "./infrastructure/components/ApiCharacters";
import Container from "./infrastructure/components/Container";
import { FlexElement } from "../components/layout/flex/Flex-Element";
import { BaseSyntheticEvent, useEffect, useState } from "react";


export default function Main(): JSX.Element {

    const [characterName, setcharacterName] = useState('');

    const searchCharacter = ({ target }: BaseSyntheticEvent) => {
        setcharacterName(target.value);
    }

    useEffect(() => {
    }, [characterName])

    return (
        <Container class_style="">

            <FlexElement class_style="flex-dir-col jc-center height-350 bg-img ">
                <div>
                    <h1 style={{ color: "black", textShadow: "2px 2px 0px #FFF" }}>Buscar Personaje </h1>
                </div>
                <div>
                    <input className="input-el" type="text" placeholder="Buscar" onChange={searchCharacter} />
                </div>
            </FlexElement>

            <FlexElement class_style="flex-dir-row flex-flw-wrap jc-center gap-20 pd-40">
                <ApiCharacters CharacterName={characterName} />
            </FlexElement>

        </Container>
    );
}
