import React, { useEffect } from "react";
import { Window } from "../Window";
import { useSpeedDialState } from "../../hooks/useSpeedDial";
import InputBox from "../SpeedDialInputBox";
import Button from "../Button";
import SettingsGroup from "../Settings/SettingsGroup";
import SettingsGroupSection from "../Settings/SettingsGroupSection";

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
                <SettingsGroup header="Speed Dial">
                    <SettingsGroupSection
                        header="Links"
                        description="Add or remove links according to your preference."
                    >
                        <>
                            <table className="w-full table-fixed font-nso-dinkie-9px text-xl">
                                <thead >
                                    <tr>
                                        <th>Name</th>
                                        <th>URL</th>
                                        <th>Icon</th>
                                        <th>Color</th>
                                        <th className="w-16 pb-12" />
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
                        </>
                    </SettingsGroupSection>
                </SettingsGroup>
            </div>
        </Window>
    );
};

export default Settings;
