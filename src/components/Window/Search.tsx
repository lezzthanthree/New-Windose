import React from "react";
import { Window } from "../Window";
import { useWindowState } from "../../hooks/useWindowStates";
import InputBox from "../InputBox";
import Button from "../Button";

const SearchWindow: React.FC = () => {
    const { searchWindow, setSearchWindow } = useWindowState();
    return (
        <>
            {searchWindow && (
                <Window
                    title="Search"
                    id="search"
                    stateHandler={setSearchWindow}
                >
                    <div className="w-5xl flex flex-col justify-center gap-4">
                        <img
                            src="img/kangle.png"
                            alt=""
                            className="self-center w-75 mt-16"
                        />
                        <div className="flex flex-row gap-2 px-16 items-center">
                            <InputBox placeholder="Search Kangle..." />
                            <Button label="Search"/>
                        </div>
                        <div className="flex flex-col justify-center items-center font-nso-dinkie-9px text-nso-purple ">
                            <p>Press ENTER to confirm</p>
                            <p>Press ESC to cancel</p>
                        </div>
                        <div className="h-32" />
                    </div>
                </Window>
            )}
        </>
    );
};

export default SearchWindow;
