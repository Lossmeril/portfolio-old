import NextLink from "next/link"
import {
    Container,
    Box,
    Heading,
    chakra,
    useColorModeValue,
    Button,
    Divider,
    Wrap,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
} from "@chakra-ui/react"
import Section from "../components/section"
import Image from 'next/image'
import Paragraph from "../components/paragraph"
import TextLoop from "../components/text-loop"
import theme from "../libs/theme"
import Layout from '../components/layouts/article'
import PortfolioButton from "../components/portfolio-button"
import SkillBox from "../components/skill-box"
import SkillIcon from "../components/skill-icon"

/*ICONS*/
import { FaDiceD20, FaRecordVinyl, } from "react-icons/fa"
import { RiFilmFill, RiBook2Fill } from "react-icons/ri"
import { IoGameController, IoImagesSharp } from "react-icons/io5"
import { MdCatchingPokemon } from "react-icons/md"
import { GiCat, GiVisoredHelm } from "react-icons/gi"
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiPhp,
    SiReact,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    SiAdobeaudition,
    SiWordpress,
} from "react-icons/si"
import { AvidIcon } from "../components/icons/avid-icon"

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
                        Hi, I am Michal and I am a <TextLoop texts={["graphic designer ✍️", "filmmaker 🎬", "web designer 🖥️", "digital artist 🎨"]} textColors={[theme.colors.michalGreen.base, useColorModeValue(theme.colors.highlight.light, theme.colors.highlight.dark), theme.colors.michalGreen.base, useColorModeValue(theme.colors.highlight.light, theme.colors.highlight.dark)]} />
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
                        I am a freelance designer, videographer and artist from Czechia who likes not to take life too seriously. I love to tweak and design all things digital or physical while exploring all the different fields of IT.
                    </Paragraph>
                    <Paragraph>
                        In my free time, I seek hobbies where I can make use of my creativity and sense of humour. I am also working on my feature documentary &quot;Garden of Eden&quot;.
                    </Paragraph>
                    <Box textAlign="left" my={4}>
                        <PortfolioButton icon={IoImagesSharp} link="">Portfloio</PortfolioButton>
                    </Box>
                </Section>

                <Section delay="0.6" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        What can I do?
                    </Heading>
                    <SkillBox>
                        <Heading as="h3" variant="skill-title" mb={4}>SW &amp; technologies</Heading>
                        <Wrap spacing={3}>
                            <SkillIcon as={SiAdobephotoshop} name="Adobe Photoshop" skill={5} />
                            <SkillIcon as={SiAdobeillustrator} name="Adobe Illustrator" skill={5} />
                            <SkillIcon as={SiAdobeindesign} name="Adobe InDesign" skill={4} />
                            <SkillIcon as={SiAdobepremierepro} name="Adobe Premiere Pro" skill={5} />
                            <SkillIcon as={SiAdobeaftereffects} name="Adobe After Effects" skill={3} />
                            <SkillIcon as={SiAdobeaudition} name="Adobe Audition" skill={3} />
                            <SkillIcon as={AvidIcon} name="AVID Media Composer" skill={3} w={12} />
                            <SkillIcon as={SiHtml5} name="HTML 5" skill={5} />
                            <SkillIcon as={SiCss3} name="CSS 3" skill={5} />
                            <SkillIcon as={SiJavascript} name="JavaScript" skill={3} />
                            <SkillIcon as={SiTypescript} name="TypeScript" skill={3} />
                            <SkillIcon as={SiReact} name="React" skill={3} />
                            <SkillIcon as={SiPhp} name="PHP" skill={4} />
                            <SkillIcon as={SiWordpress} name="Wordpress" skill={5} />
                        </Wrap>
                    </SkillBox>
                    <SkillBox>
                        <Heading as="h3" variant="skill-title" mb={4}>Skills</Heading>
                        <Paragraph>Brand&nbsp;design&nbsp;| Vector&nbsp;illustrations&nbsp;| Event&nbsp;branding&nbsp;| Event&nbsp;videography&nbsp;| Directing&nbsp;| Camera&nbsp;operating&nbsp;| Sound&nbsp;recording&nbsp;| Screenwriting&nbsp;| Copywriting</Paragraph> 
                    </SkillBox>
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

                    <SimpleGrid columns={{ base: 1, md: 2 }}>
                        <Box>
                            <List>
                                <ListItem>
                                    <ListIcon as={RiBook2Fill} />
                                    Books
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={RiFilmFill} />
                                    Movies
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={IoGameController} />
                                    Videogames
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRecordVinyl} />
                                    Music on vinyl
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <List>
                                <ListItem>
                                    <ListIcon as={FaDiceD20} />
                                    Dundeons and Dragons
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCatchingPokemon} />
                                    Pokémon
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={GiCat} />
                                    Cats
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={GiVisoredHelm} />
                                    Medieval history
                                </ListItem>
                            </List>
                        </Box>
                    </SimpleGrid>
                </Section>

                <Section delay="2.1" >
                    <Heading as="h2" variant="section-title" textDecorationColor={theme.colors.michalGreen.base}>
                        Where can you find me?
                    </Heading>
                </Section>

            </Container>
        </Layout >
    )
}

export default Home