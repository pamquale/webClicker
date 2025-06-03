import { prestigeGain } from "../../utils/formulas.js";
export default function Prestige({ st, set }) {
    const gain = prestigeGain(st.count);
    const reset = () =>
        gain &&
        set({
            count: 0,
            perClick: 1,
            upgrades: {},
            duikt: st.duikt + gain,
            skin: st.skin
        });
    return (
        <button disabled={!gain} onClick={reset}>
            Prestige → +{gain} Duiktcoins
        </button>
    );
}
