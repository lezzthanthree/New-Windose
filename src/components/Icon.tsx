import React from "react";

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
    const handleAction = () => {
        // If the item wasn't dragged, trigger the click action
        if (execute) {
            new Audio("snd/execute.wav").play().catch((e) => console.log(e));
        }
        action();
    };

    return (
        <div
            className="flex flex-col items-center gap-2 font-nso-dinkie-7px text-nso-purple"
            onClick={handleAction}
        >
            <img src={image} alt="" className="h-16 w-16 object-cover icon" />
            <p>{name}</p>
        </div>
    );
};

export default Icon;
