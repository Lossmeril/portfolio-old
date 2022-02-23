import Logo from "./logo"
import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle-button"
import theme from "../libs/theme"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('michalGray.base', "whiteCream.base")

    return (
        <NextLink href={href}>
            <Link
                p={2}
                color={active ? 'michalGreen' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue(theme.colors.michalCream.base+"50", theme.colors.michalGray.base+"80")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={3}
                maxW="container.md"
                flexWrap="wrap"
                alignItems="center"
                justifyItems="space-between"
                /*borderBottom={"solid 1px"+useColorModeValue(theme.colors.michalGray.base+"20", theme.colors.michalCream.base)}*/
            >
                <Flex align="center" mr={5}>
                    <Logo />
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/portfolio" path={path}>
                        Portfolio
                    </LinkItem>
                    <LinkItem href="/journey" path={path}>
                        My Journey
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact me
                    </LinkItem>
                </Stack>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/portfolio" passHref>
                                    <MenuItem as={Link}>
                                        Portfolio
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/journey" passHref>
                                    <MenuItem as={Link}>
                                        My Journey
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>
                                        Contact me
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
