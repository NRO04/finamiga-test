
import { BaseSyntheticEvent } from "react";
import FormContactBookCompositionSchema from "../form-contac-book-composition-schema";
const handleForm = ({ target }: BaseSyntheticEvent) => {
    console.log("INFO", target);

}

const FormContactBookComposition: Array<FormContactBookCompositionSchema["schema"]> = [
    {
        title: 'NOMBRE',
        name: 'name',
        type: 'text',
        event: { onChange: handleForm }
    },
    {
        title: 'TELEFONO',
        name: 'phone',
        type: 'text',
        event: { onChange: handleForm }
    },
    {
        title: 'CORREO',
        name: 'email',
        type: 'text',
        event: { onChange: handleForm }
    },
];

export default FormContactBookComposition;