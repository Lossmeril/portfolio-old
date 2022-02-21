import {IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import theme from "../libs/theme"

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()

    return (
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            ></IconButton>
    )
}

export default ThemeToggleButton