import React from "react";
import { Window } from "../UI/Window";
import Button from "../UI/Button";

const CreditsWindow: React.FC = () => {
    return (
        <Window title="Credits" id="credits">
            <div className="w-2xl flex flex-col gap-4 h-[60vh] p-4 overflow-y-scroll">
                <div id="header">
                    <p className="font-nso-pressstart-2p text-4xl">Credits</p>
                </div>
                <div id="content" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3 items-center ">
                        <p className="text-xl self-start">
                            This application is heavily inspired from the game
                            NEEDY STREAMER OVERLOAD! All assets used are from
                            WSS Playground.
                        </p>
                        <img src="img/credits/nso.png" />
                        <Button
                            label="Get the game!"
                            onClick={() => {
                                window.open(
                                    "https://whysoserious.jp/needy/en/",
                                    "_blank",
                                );
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-3 items-center ">
                        <p className="text-xl self-start">
                            The desktop idea was also inspired by LilithDev's
                            NSO Desktop Theme! Please give her a visit!
                        </p>
                        <img src="img/credits/lilithdev.png" />
                        <div className="flex flex-row gap-2 items-center">
                            <img
                                src="https://lilithdev.neocities.org/buttons/lilithdevbtn.gif"
                                onClick={() => {
                                    window.open(
                                        "https://lilithdev.neocities.org/",
                                        "_blank",
                                    );
                                }}
                                className="h-12"
                            />
                            <Button
                                label="NSO Desktop by LilithDev"
                                onClick={() => {
                                    window.open(
                                        "https://lilithdev.neocities.org/shrine/vg/nso",
                                        "_blank",
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default CreditsWindow;
