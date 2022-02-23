import NextLink from "next/link"
import {
    Container,
    Box,
    Heading,
    chakra,
    useColorModeValue,
    Link,
    Button,
    Divider,
} from "@chakra-ui/react"
import Section from "../components/section"
import Image from 'next/image'
import Paragraph from "../components/paragraph"
import { MoonIcon } from "@chakra-ui/icons"
import TextLoop from "../components/text-loop"
import theme from "../libs/theme"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michal Špitálský
                    </Heading>
                    Hi, I am Michal and I am a <TextLoop texts={["graphic designer", "filmmaker", "web designer", "digital artist"]} textColors={[theme.colors.michalGreen.base, theme.colors.michalPink, theme.colors.michalGreen.base, theme.colors.michalPink]} />
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center">
                    <Box
                        borderColor="michalCream.base"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow='hidden'
                    >
                        <ProfileImage
                            src="/images/michal.png"
                            alt="Michal Špitálský"
                            borderRadius='full'
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay="0.1" >
                <Heading as="h3" variant="section-title">
                    Graphic Designer
                </Heading>
                <Paragraph>
                    Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called {' '}
                    <NextLink href=""><Link>Inkscape</Link></NextLink>
                    .
                </Paragraph>
                <Box textAlign="center" my={4}>
                    <NextLink href="">
                        <Button leftIcon={<MoonIcon />} colorScheme="teal">Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay="1.1" >
                <Heading as="h3" variant="section-title">
                    Graphic Designer
                </Heading>
                <p>Lorem Ipsum</p>
            </Section>

        </Container>
    )
}

export default Page