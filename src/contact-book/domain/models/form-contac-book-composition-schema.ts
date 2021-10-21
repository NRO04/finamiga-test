
type event = {
    onChange: (params: any) => void
};
export default interface FormContactBookCompositionSchema {

    schema: {
        title?: string;
        type: string;
        placeholder?: string;
        name: string;
        event?: event
    }

}