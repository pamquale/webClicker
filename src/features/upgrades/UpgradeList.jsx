import data from "./data.js";
import { upgradeCost } from "../../utils/formulas.js";
export default function UpgradeList({ st, add }) {
    return (
        <div className="up-list">
            {data.map((u) => {
                const lvl = st.upgrades[u.id] ?? 0;
                const price = upgradeCost(u.base, lvl);
                const disabled = st.count < price;
                const buy = () => {
                    if (disabled) return;
                    add((s) => ({
                        ...s,
                        count: s.count - price,
                        perClick: s.perClick + u.effect,
                        upgrades: { ...s.upgrades, [u.id]: lvl + 1 }
                    }));
                };
                return (
                    <button key={u.id} disabled={disabled} onClick={buy}>
                        {u.title} [lvl {lvl}] — {price}
                    </button>
                );
            })}
        </div>
    );
}
