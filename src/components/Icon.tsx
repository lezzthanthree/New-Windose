import React, { useRef } from "react";
import Draggable from "react-draggable";

interface IconProps {
    image: string;
    name: string;
}

const Icon: React.FC<IconProps> = ({ image, name }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div
                className="flex flex-col items-center gap-2 font-nso-dinkie-7px text-nso-purple"
                ref={nodeRef}
            >
                <img src={image} alt="" className="h-16 w-16 object-cover" />
                <p>{name}</p>
            </div>
        </Draggable>
    );
};

export default Icon;
