import styles from "../styles/ClickButton.module.scss";
import { motion } from "framer-motion";
export default function ClickButton({ onClick }) {
    return (
        <motion.button
            className={styles.btn}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            Click
        </motion.button>
    );
}
