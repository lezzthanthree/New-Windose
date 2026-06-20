import { Window } from "./components/Window";
import { useWindowState } from "./states/windowStates";

function App() {
    const { speedDialWindow, setSpeedDialWindow } = useWindowState();

    return (
        <div className="w-screen h-screen bg-[url('/img/nso_bg_1080.png')] flex flex-col items-center justify-center">
            <div className="flex flex-1 w-full" id="desktop">
                {speedDialWindow && (
                    <Window title="Test" stateHandler={setSpeedDialWindow}>
                        <div className="flex flex-row items-center justify-center flex-1 w-180">
                            Test
                        </div>
                    </Window>
                )}
            </div>
            <div className="h-4 w-full bg-amber-600" id="taskbar">
                <button onClick={() => setSpeedDialWindow(true)}>Test</button>
            </div>
        </div>
    );
}

export default App;
