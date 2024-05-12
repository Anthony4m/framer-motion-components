import { SlLike } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function YoutubeLikeBtn() {
    const [like, setLike] = useState(false);
    const likeStatus = {
        true: <SlLike className="size-10em" />,
        false: <AiFillLike className="size-10em" />
        // false:  <SlLike className="size-10em bg-red-700"/>
    };

    const variants = {
        initial: { opacity: 0, y: 0, rotate: 0 },
        animate: { opacity: 1, y: 0, rotate: 0,scale: 3},
        animated: { opacity: 1, y: 0, rotate: -60},
        exit: { opacity: 0, y: 0, rotate: 85,scale:3 }
    }

    return (
        <div className="grid place-content-center h-screen">
            <motion.button layoutId="liked-btutn" className="bg-blue-600 rounded px-3 py-5" onClick={() => setLike((s) => !s)}>
                <AnimatePresence mode="popLayout">
                    {like ? (
                        <motion.span
                            layoutId="liked"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 1, type: "spring", bounce: 0, delay:1 }}
                            key="true"
                        >
                            {likeStatus[true]}
                        </motion.span>
                    ) : (
                        <motion.span
                            layoutId="liked"
                            variants={variants}
                            initial="initial"
                            animate="animated"
                            exit="exit"
                            transition={{ duration: 1,type: "spring",  bounce: 0, delay:1  }}
                            key="false"
                        >
                            {likeStatus[false]}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
