import {motion, AnimatePresence} from "framer-motion";
import {LuMegaphone} from "react-icons/lu";
import {CiCircleCheck} from "react-icons/ci";
import {useState} from "react";
import {Spinner} from "./Spinner.jsx";

export default function FeedbackModal() {
    const [openModal, setOpenModal] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [buttonState, setButtonState] = useState("idle");
    const sendFeedback = (e) => {
        e.preventDefault();
        // This code is just a placeholder
        setButtonState("loading");

        setTimeout(() => {
            setButtonState("success");
        }, 1750);

        setTimeout(() => {
            setButtonState("idle");
        }, 3500);
        setTimeout(() => {
            setFeedback((s) => !s);
        }, 3800);
        setTimeout(() => {
            setOpenModal((s) => !s);
        }, 5000);
    }
    const buttonCopy = {
        idle: "Send Feedback",
        loading: "loading..",
        success: "Login link sent!",
    };

    const formView = {
        false: <FeedbackForm sendFeedback={sendFeedback}
                            buttonCopy={buttonCopy}
                            buttonState={buttonState}
                            feedback={feedback}/>,
        true: <FeedbackReceivedMessage/>
    }
   const variants = {
       initial:{opacity:0},
       animate:{opacity:1},
       transition:{delay:0.3,ease: [0.17, 0.67, 0.83, 0.67]},
       exit:{opacity:0}
    }
    return (
        <>
            <AnimatePresence mode="popLayout" initial={false}>
                <div className="grid place-content-center h-[100vh]">
                    {openModal ? (
                        <AnimatePresence mode="sync" initial={false}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 1}}
                            layoutId="feedback">
                            {formView[feedback]}
                        </motion.div>
                        </AnimatePresence>
                    ) : (
                        <motion.button variants={variants} initial="initial" animate="animate" transition={{delay:0.3,type:"spring",bounce:0}} exit="exit"  layoutId="feedback" onClick={() => setOpenModal((s) => !s)}
                                       className="flex items-center space-x-2 font-bold text-2xl bg-gray-400 rounded-2xl p-4">
                            <motion.div variants={variants} initial="initial" animate="animate" transition="transition" exit="exit" layoutId="feedback-icon"> <LuMegaphone/></motion.div>
                            <motion.p variants={variants} initial="initial" animate="animate" transition="transition" exit="exit" layoutId="p-feedback">
                                Feedback</motion.p>
                        </motion.button>
                    )}
                </div>
            </AnimatePresence>
        </>
    );
}
const FeedbackForm = ({ sendFeedback, buttonCopy, buttonState, feedback }) => {
    return (
        <form action="" className="bg-gray-400 rounded-2xl">
            <textarea cols="50" rows="10" className="bg-gray-200 rounded-2xl"></textarea>
            <button  onClick={sendFeedback} className="block ml-auto px-5 bg-blue-600 py-2 rounded-2xl text-white">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        transition={{type: "spring", duration: 1, bounce: 1}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        key={feedback}
                    >
                        <motion.div animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1,ease: [0.17, 0.67, 0.83, 0.67]}}>{buttonCopy[buttonState]}</motion.div>
                    </motion.span>
                </AnimatePresence>
            </button>
        </form>
    );
};

const FeedbackReceivedMessage = () => {
    return (
        <motion.div
            transition={{type: "spring", duration: 1, bounce: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            layoutId="receive-feedback" className="grid place-content-center shadow-amber-50 border-2 h-64 w-96 rounded-2xl text-center">
            <CiCircleCheck className="m-auto"/>
            <h6 className="font-bold">Feedback received!</h6>
            <p>Thanks for helping us improve Clerk</p>
        </motion.div>
    );
};


