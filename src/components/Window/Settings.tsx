import React, { useEffect } from "react";
import { Window } from "../Window";
import { useSpeedDialState } from "../../hooks/useSpeedDial";
import InputBox from "../SpeedDialInputBox";
import Button from "../Button";

const Settings: React.FC = () => {
    const { speedDial, initializeSpeedDial, addSpeedDial, deleteSpeedDial } =
        useSpeedDialState();

    useEffect(() => {
        initializeSpeedDial();
    }, []);

    return (
        <Window title="Settings" id="settings">
            <div className="w-5xl flex flex-col gap-4 h-[60vh] text-nso-purple p-4 overflow-y-scroll">
                <div id="header">
                    <p className="font-nso-pressstart-2p text-4xl">Settings</p>
                </div>
                {/* <div id="general-settings">
                    <div id="header" className="w-1">
                        <p className="font-nso-pixelmplus-b text-4xl">
                            General
                        </p>
                    </div>
                    <div id="settings-content"></div>
                </div> */}
                <div id="speed-dial-settings" className="flex flex-col">
                    <div id="header">
                        <p className="font-nso-pixelmplus-b text-4xl">
                            Speed Dial
                        </p>
                    </div>
                    <div id="settings-content" className="flex flex-col">
                        <div id="settings-content-section">
                            <p
                                id="settings-content-section-header"
                                className="font-nso-dinkie-9px text-2xl"
                            >
                                Links
                            </p>
                            <p
                                id="settings-content-section-description"
                                className="font-nso-dinkie-9px text-xl"
                            >
                                Add or remove links according to your
                                preference.
                            </p>
                            <div className="w-full overflow-auto flex flex-col ">
                                <table className="w-full table-fixed font-nso-dinkie-9px text-xl">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>URL</th>
                                            <th>Icon</th>
                                            <th>Color</th>
                                            <th className="w-16" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {speedDial.map((link) => (
                                            <tr key={link.id}>
                                                <td className="text-center">
                                                    <InputBox
                                                        id={link.id}
                                                        type="name"
                                                        value={link.name}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    <InputBox
                                                        id={link.id}
                                                        type="url"
                                                        value={link.url}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    <InputBox
                                                        id={link.id}
                                                        type="icon"
                                                        value={link.icon}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    <InputBox
                                                        id={link.id}
                                                        type="color"
                                                        value={link.color}
                                                    />
                                                </td>
                                                <td className="w-16 flex justify-center items-center">
                                                    <Button
                                                        label=""
                                                        icon="hn-times"
                                                        onClick={() => {
                                                            deleteSpeedDial(
                                                                link.id,
                                                            );
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Button
                                    label="Add"
                                    icon="hn-plus-solid"
                                    onClick={addSpeedDial}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default Settings;
