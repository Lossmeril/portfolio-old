import { Box, useColorModeValue } from "@chakra-ui/react"


const SkillBox = ({children}) => {
    return (
        <Box bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")} p={3} rounded={7}>
            {children}
        </Box>
    )
}

export default SkillBox