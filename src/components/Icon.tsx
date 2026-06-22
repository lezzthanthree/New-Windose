import React, { useRef } from "react";
import Draggable from "react-draggable";

interface IconProps {
    image: string;
    name: string;
    action: () => void;
    execute?: boolean;
}

const Icon: React.FC<IconProps> = ({
    image,
    name,
    action,
    execute = false,
}) => {
    const nodeRef = useRef(null);

    const handleAction = () => {
        if (execute) new Audio("snd/execute.wav").play();
        action();
    };

    return (
        <Draggable nodeRef={nodeRef}>
            <div
                className="flex flex-col items-center gap-2 font-nso-dinkie-7px text-nso-purple"
                ref={nodeRef}
                onClick={handleAction}
            >
                <img
                    src={image}
                    alt=""
                    className="h-16 w-16 object-cover icon"
                />
                <p>{name}</p>
            </div>
        </Draggable>
    );
};

export default Icon;
