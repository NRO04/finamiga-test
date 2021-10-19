type Props = {
    class_style?: string;
    children: any
}

export const FlexElement = ({class_style = '', children}: Props) => {

    return (
        <div className={`flex ${class_style}`}>
            {children}
        </div>
    );
}