import Container from "../../api-characters/infrastructure/components/Container";
import { FlexElement } from "../../components/layout/flex/Flex-Element";
import FormContactBook from "./components/form-contact-book";
import ListContacts from "./components/list-contacts";

const ContactBook = (): JSX.Element => {

    return (
        <>
            <Container class_style="grid-template-auto-fill-col">

                <FlexElement class_style="flex-dir-col align-i-center gap-50">
                    <FormContactBook />
                </FlexElement>

                <FlexElement class_style="flex-dir-col align-i-center gap-50">

                    <ListContacts />

                </FlexElement>
            </Container>
        </>
    );

}

export default ContactBook;