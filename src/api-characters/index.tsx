import ApiCharacters from "./infrastructure/components/ApiCharacters";
import Container from "./infrastructure/components/Container";


export default function Main(): JSX.Element {
    return (
        <Container class_style="flex-dir-col">
            <div className="flex-element">
                lorem
            </div>
            <div className="flex-element">
                lorem
            </div>
            {/*<ApiCharacters/>*/}
        </Container>
    );
}
