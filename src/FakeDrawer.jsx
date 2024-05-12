import {AnimatePresence, motion} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import useMeasure from 'react-use-measure';

export default function Example() {
    const [showExtraContent, setShowExtraContent] = useState(false);
    const [ref,bounds] = useMeasure();
    return (
        <div className="wrapper">
            <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
                Toggle height {bounds.height}
            </button>
            <AnimatePresence mode="popLayout">
                <motion.div
                    layout
                    animate={{height: showExtraContent ? 218 : 112}}
                    className="element">
                    <div ref={ref} className="inner">
                        <h1>Fake Family Drawer</h1>
                        <motion.p layout>
                            This is a fake family drawer. Animating height is tricky, but
                            satisfying when it works.
                        </motion.p>
                        {showExtraContent ? (
                            <motion.p key={showExtraContent} layout exit={{backgroundColor: "blue",transition: { ease: 'easeIn', duration: 10 } }} transition={{delay:1}}>
                                This extra content will change the height of the drawer. Some even more content to make
                                the drawer taller and taller and taller...
                            </motion.p>
                        ) : null}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}