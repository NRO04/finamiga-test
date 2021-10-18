import { ReactChild } from "react";

type Props = {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | ReactChild
    | ReactChild[];
};

export default function Container({ children }: Props) {

    return (
        <div className="container">
            {children}
        </div>
    );
}