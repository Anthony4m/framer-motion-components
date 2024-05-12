import { motion } from "framer-motion";
import { useState } from "react";

export default function Layout() {
    const [showSecond, setShowSecond] = useState(false);

    return (
        <div className="wrapper">
            <motion.button className="button" onClick={() => setShowSecond((s) => !s)} layout>
                Animate
            </motion.button>
            {showSecond ? (
                <motion.div className="second-element" layoutId="element" style={{ borderRadius: 12 }} />
            ) : (
                <motion.div className="element"  layoutId="element" style={{ borderRadius: 12 }}/>
            )}
        </div>
    );
}