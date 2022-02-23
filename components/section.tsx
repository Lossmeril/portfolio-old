import { motion } from "framer-motion"
import { chakra, shouldForwardProp, Divider } from "@chakra-ui/react"

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return (shouldForwardProp(prop) || prop === "transition")
    }
})

const Section = ({ children, delay = "0" }) => {
    return (
        <>
            <StyledDiv
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: "0.8", delay }}
                mb={12}
            >
                {children}
            </StyledDiv>
            <Divider mb={8} />
        </>)
}

export default Section