import { motion, AnimatePresence } from "framer-motion"
import {useState} from "react";

export const MyComponent = () => {
    const [isVisible, setIsVisible] = useState(false)
    const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <button onClick={()=>setIsVisible((s)=>!s)}>
        <AnimatePresence mode="wait" initial={false}>
            {isVisible ? (
                <motion.span
                    key="checkmark"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    hello
                </motion.span>

            ) :(
        <motion.span
        key="copy"
        variants={variants}
        nitial="hidden"
        animate="visible"
        exit="hidden"
        >
                <h2>Copied</h2>
        </motion.span>
                )}
        </AnimatePresence>
            </button>
    )
}