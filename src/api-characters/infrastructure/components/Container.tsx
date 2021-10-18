import {ReactChild} from "react";

type Props = {
    children:
        | JSX.Element
        | JSX.Element[]
        | string
        | string[]
        | ReactChild
        | ReactChild[];
    class_style: string;
};

export default function Container({children, class_style}: Props) {

    return (
        <div className={`container ${class_style}`}>
            {children}
        </div>
    );
}