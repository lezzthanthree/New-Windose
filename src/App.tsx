import { Window } from "./components/Window";

function App() {
    return (
        <div className="w-screen h-screen bg-[url('/img/nso_bg_1080.png')] relative flex items-center justify-center">
            <Window title="Test">
                <div className="flex flex-row items-center justify-center flex-1">
                    Test
                </div>
            </Window>
        </div>
    );
}

export default App;
