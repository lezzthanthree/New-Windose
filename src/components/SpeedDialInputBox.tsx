import React from "react";
import { useSpeedDialState } from "../hooks/useSpeedDial";

interface InputBoxProps {
    placeholder?: string;
    id: number;
    type: "name" | "icon" | "color" | "url";
    value: string;
    ref?: React.RefObject<HTMLInputElement>;
}

const InputBox: React.FC<InputBoxProps> = ({
    placeholder = "",
    id,
    type,
    value,
    ref,
}) => {
    const { editSpeedDial } = useSpeedDialState();

    return (
        <input
            type="text"
            className="flex-1 flex flex-row gap-2 items-center border-2 text-xl border-b-white border-r-white border-t-nso-purple border-l-nso-purple bg-nso-light-pink font-nso-dinkie-9px text-nso-purple p-2 w-full min-w-0"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                const value = e.target.value;
                editSpeedDial(id, type, value);
            }}
            ref={ref}
        />
    );
};

export default InputBox;
