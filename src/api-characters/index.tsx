import ApiCharacters from "./infrastructure/components/ApiCharacters";
import Container from "./infrastructure/components/Container";
import {FlexElement} from "../components/layout/flex/Flex-Element";


export default function Main(): JSX.Element {
    return (
        <Container class_style="grid-template-row-2">

            <FlexElement class_style="flex-dir-col jc-center height-350 bg-img ">
                <div>
                    <h1>Buscar Personaje</h1>
                </div>
                <div>
                    <input className="input-el" type="text" placeholder="Buscar"/>
                </div>
            </FlexElement>

            <FlexElement class_style="flex-dir-row flex-flw-wrap jc-center gap-20 pd-40">
                <ApiCharacters/>
            </FlexElement>

        </Container>
    );
}
