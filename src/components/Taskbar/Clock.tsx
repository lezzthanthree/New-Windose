import React from "react";
import { useClock } from "../../hooks/useClock";

const Clock: React.FC = () => {
    const { dateShort, timeShort } = useClock();
    return (
        <div
            id="clock"
            className="flex flex-row gap-2 items-center border-2 p-1 border-b-white border-r-white border-t-nso-purple border-l-nso-purple"
        >
            <div className="flex flex-row gap-2">
                <p className="    text-xl">{dateShort}</p>
                <p className="    text-xl">{timeShort}</p>
            </div>
        </div>
    );
};

export default Clock;
