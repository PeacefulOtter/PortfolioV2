import { FC } from "react";

interface IWrapper { 
    id: string;
    children?: React.ReactNode;
}

const Wrapper: FC<IWrapper> = ( { children, id } ) => {
    return (
        <div className="wrapper" id={id}>
            { children }
        </div>
    )
}

export default Wrapper;