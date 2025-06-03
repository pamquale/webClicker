import { useEffect } from "react";
import { useClicker } from "./hooks/useClicker.js";
import ClickButton from "./components/ClickButton.jsx";
import UpgradeList from "./features/upgrades/UpgradeList.jsx";
import Wheel from "./features/wheel/Wheel.jsx";
import Prestige from "./features/prestige/Prestige.jsx";
import SkinSelector from "./features/skins/SkinSelector.jsx";
import "./index.css";

export default function App() {
    const { state, setState, click } = useClicker();
    useEffect(() => {
        document.body.className = state.skin;
    }, [state.skin]);
    return (
        <div className="main">
            <div className="stats">
                <span>💰 {state.count}</span>
                <span>⚡ {state.perClick}/click</span>
                <span>🪙 {state.duikt}</span>
            </div>
            <ClickButton onClick={click} />
            <UpgradeList st={state} add={setState} />
            <Wheel st={state} set={setState} />
            <Prestige st={state} set={setState} />
            <SkinSelector st={state} set={setState} />
        </div>
    );
}
