import { useState, useEffect } from "react";
import { loadState, saveState } from "../db/store.js";
export function useClicker() {
    const [state, setState] = useState({
        count: 0,
        perClick: 1,
        upgrades: {},
        duikt: 0,
        skin: "default"
    });
    useEffect(() => {
        loadState().then((s) => s && setState(s));
    }, []);
    useEffect(() => void saveState(state), [state]);
    const click = () => setState((s) => ({ ...s, count: s.count + s.perClick }));
    const addPerClick = (n) =>
        setState((s) => ({ ...s, perClick: s.perClick + n }));
    return { state, setState, click, addPerClick };
}
