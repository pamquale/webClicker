const skins = ["default", "dark", "neon"];
export default function SkinSelector({ st, set }) {
    return (
        <select
            value={st.skin}
            onChange={(e) => set((s) => ({ ...s, skin: e.target.value }))}
        >
            {skins.map((s) => (
                <option key={s}>{s}</option>
            ))}
        </select>
    );
}
