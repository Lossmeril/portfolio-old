import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ColoredText from "./colored-text";
import theme from "../libs/theme";

const variants = {
    enter: direction => {
        return {
            y: -20,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        y: 1,
        opacity: 1
    },
    exit: direction => {
        return {
            zIndex: 0,
            opacity: 0
        };
    }
};

const TextLoop = ({texts, textColors}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            let next = index + 1;
            if (next === texts.length) {
                next = 0;
            }
            setIndex(next);
        }, 3 * 1000);
    }, [index, setIndex]);

    return (
        <AnimatePresence>
            <motion.span
                style={{ position: "absolute", marginLeft: "0.5ch", fontFamily: "Konnect Extra Bold, sans-serif", fontSize: "13pt"}}
                variants={variants}
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    y: { type: "spring" },
                    opacity: { duration: 0.5 }
                }}
            >
                <ColoredText textColor={textColors[index]}>{texts[index]}</ColoredText>
            </motion.span>
        </AnimatePresence>
    );
};

export default TextLoop