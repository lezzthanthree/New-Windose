import { useEffect, useState } from "react";
import { useGeneralSettingsState } from "./useGeneralSettings";

export const useClock = () => {
    const [clock, setClock] = useState<Date>(new Date());
    const { hour24 } = useGeneralSettingsState();

    useEffect(() => {
        const interval = window.setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => window.clearInterval(interval);
    }, []);

    if (!clock) {
        return {
            clock: new Date(),
            timeShort: "",
            timeLong: "",
            weekday: "",
            dateShort: "",
            dateLong: "",
        };
    }

    return {
        clock,
        timeShort: clock.toLocaleTimeString([], {
            hour: hour24 ? "2-digit" : "numeric",
            minute: "2-digit",
            hour12: !hour24,
        }),
        timeLong: clock.toLocaleTimeString([], {
            hour: hour24 ? "2-digit" : "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: !hour24,
        }),
        weekday: clock.toLocaleDateString([], { weekday: "long" }),
        dateShort: clock.toLocaleDateString([], {
            month: "numeric",
            day: "numeric",
            year: "numeric",
        }),
        dateLong: clock.toLocaleDateString([], {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
    };
};
