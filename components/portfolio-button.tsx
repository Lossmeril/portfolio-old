import NextLink from "next/link"
import {Button, useColorModeValue} from "@chakra-ui/react"
import theme from "../libs/theme"

const PortfolioButton = ({ children, icon, link }) => {
    return (
        <NextLink href={link}>
            <Button leftIcon={icon}
                backgroundColor={useColorModeValue(theme.colors.michalGreen.base, theme.colors.michalCream.base)}
                color={useColorModeValue(theme.colors.michalCream.base, theme.colors.michalGray.base)}
                _hover={{
                    backgroundColor: useColorModeValue(theme.colors.michalGreen.saturated, theme.colors.michalCream.saturated),
                    color: useColorModeValue(theme.colors.michalCream.saturated, theme.colors.michalGray.base)
                }}>{children}</Button>
        </NextLink>
    )
}

export default PortfolioButton