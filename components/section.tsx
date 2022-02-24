import { motion } from "framer-motion"
import { chakra, shouldForwardProp, Divider, useColorModeValue} from "@chakra-ui/react"
import theme from "../libs/theme"

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
            >
                {children}
            </StyledDiv>
            <Divider mb={8} mt={12} opacity={0.2} borderColor={useColorModeValue(theme.colors.michalGray.base, theme.colors.michalCream.base)} />
        </>)
}

export default Section