import { motion } from "framer-motion";
const effects = [
    { t: "+50%", k: 1.5 },
    { t: "-50%", k: 0.5 },
    { t: "Freeze 5s", k: 0 },
    { t: "+100", k: 100 },
    { t: "-100", k: -100 },
    { t: "x2 30s", k: 2 }
];
export default function Wheel({ st, set }) {
    const spin = () => {
        const e = effects[Math.floor(Math.random() * effects.length)];
        if (e.k === 0) return;
        if (Math.abs(e.k) < 3)
            set((s) => ({ ...s, perClick: Math.max(1, Math.floor(s.perClick * e.k)) }));
        else set((s) => ({ ...s, count: s.count + e.k }));
    };
    return (
        <motion.button whileTap={{ scale: 0.9 }} onClick={spin}>
            🎰 Spin
        </motion.button>
    );
}
