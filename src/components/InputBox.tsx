import React from "react";

interface InputBoxProps {
    placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ placeholder = "" }) => {
    return (
        <input
            type="text"
            className="flex-1 flex flex-row gap-2 items-center border-2 text-xl border-b-white border-r-white border-t-nso-purple border-l-nso-purple bg-nso-light-pink font-nso-dinkie-9px text-nso-purple p-2"
            placeholder={placeholder}
        />
    );
};

export default InputBox;
