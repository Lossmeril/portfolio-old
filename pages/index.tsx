import NextLink from "next/link"
import {
    Container,
    Box,
    Heading,
    chakra,
    useColorModeValue,
    Link,
    Button,
    SimpleGrid,
    Divider,
} from "@chakra-ui/react"
import Section from "../components/section"
import Image from 'next/image'
import Paragraph from "../components/paragraph"
import TextLoop from "../components/text-loop"
import theme from "../libs/theme"
import Layout from '../components/layouts/article'

import { IoImagesSharp } from "react-icons/io5"
import SkillBox from "../components/skill-box"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
        <Layout>
            <Container>
                <Box display={{ md: 'flex' }}
                    bgGradient={useColorModeValue('linear(to-b,' + theme.colors.michalCream.saturated + '00 0%, ' + theme.colors.michalCream.saturated + 'FF 25%)', 'linear(to-b,' + theme.colors.michalGray.base + '00 0%, ' + theme.colors.michalGray.base + 'FF 50%)')}
                >
                    <Box flexGrow={1}
                        pt={5}
                        pb={10}
                    >
                        <Heading as="h1" variant="page-title">
                            Michal Špitálský
                        </Heading>
                        Hi, I am Michal and I am a <TextLoop texts={["graphic designer ✍️", "filmmaker 🎬", "web designer 🖥️", "digital artist 🎨"]} textColors={[theme.colors.michalGreen.base, theme.colors.michalPink, theme.colors.michalGreen.base, theme.colors.michalPink]} />
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
                <Divider mb={14} mt={2} />
                <Section delay="0.1" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        Who am I?
                    </Heading>
                    <Paragraph>
                        I am a freelance designer, videographer and artist from Czechia. I love to tweak and design all things digital or physical and to explore all the different fields of IT.
                    </Paragraph>
                    <Paragraph>
                        In my free time, I seek hobbies where I can make use of my creativity and sense of humour. I am also working on my feature documentary &quot;Garden of Eden&quot;.
                    </Paragraph>
                    <Box textAlign="left" my={4}>
                        <NextLink href="">
                            <Button leftIcon={<IoImagesSharp />}
                                backgroundColor={useColorModeValue(theme.colors.michalGreen.base, theme.colors.michalCream.base)}
                                color={useColorModeValue(theme.colors.michalCream.base, theme.colors.michalGray.base)}
                                _hover={{
                                    backgroundColor: useColorModeValue(theme.colors.michalGreen.saturated, theme.colors.michalCream.saturated),
                                    color: useColorModeValue(theme.colors.michalCream.saturated, theme.colors.michalGray.base)
                                }}>Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay="0.6" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        What can I do?
                    </Heading>
                    <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2}>
                        <SkillBox>
                            Photoshop
                            Illustrator
                            InDesign
                            Cinema 4D
                        </SkillBox>
                        <SkillBox>
                            Premiere Pro
                            After Effects
                            AVID Media Composer
                            Audition
                        </SkillBox>
                        <SkillBox>
                            HTML
                            CSS
                            PHP
                            React
                            TypeScript
                        </SkillBox>
                    </SimpleGrid>
                    {/*<NextLink href=""><Link>Inkscape</Link></NextLink>*/}
                </Section>

                <Section delay="1.1" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        How did I get here?
                    </Heading>
                </Section>

                <Section delay="1.6" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        What do I love?
                    </Heading>
                </Section>

                <Section delay="2.1" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        Where can you find me?
                    </Heading>
                </Section>

            </Container>
        </Layout>
    )
}

export default Home