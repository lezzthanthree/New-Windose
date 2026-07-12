import React from "react";

interface CheckboxProps {
    id: string;
    label: string;
    state: boolean;
    onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, state, onClick }) => {
    return (
        <label
            className="flex flex-row items-center gap-2 cursor-pointer"
            htmlFor={id}
        >
            <input
                type="checkbox"
                name={id}
                id={id}
                hidden
                onClick={onClick}
                checked={state}
            />
            {state ? (
                <img
                    className="h-6 aspect-square"
                    src="img/checkbox/enabled.png"
                    alt="Enabled: "
                />
            ) : (
                <img
                    className="h-6 aspect-square"
                    src="img/checkbox/disabled.png"
                    alt="Disabled: "
                />
            )}
            <p className="text-xl">{label}</p>
        </label>
    );
};

export default Checkbox;
