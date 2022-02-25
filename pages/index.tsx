import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  chakra,
  useColorModeValue,
  Divider,
  Wrap,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import Section from '../components/section'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import TextLoop from '../components/text-loop'
import theme from '../libs/theme'
import Layout from '../components/layouts/article'
import PortfolioButton from '../components/portfolio-button'
import SkillBox from '../components/skill-box'
import SkillIcon from '../components/skill-icon'

/*ICONS*/
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FaDiceD20, FaRecordVinyl } from 'react-icons/fa'
import {
  RiFilmFill,
  RiBook2Fill,
  RiClapperboardFill,
  RiQuillPenFill,
  RiScissorsFill
} from 'react-icons/ri'
import {
  IoCalendarSharp,
  IoGameController,
  IoImagesSharp,
  IoPricetag,
  IoShapesSharp,
  IoCamera,
  IoMic,
  IoNewspaperSharp
} from 'react-icons/io5'
import { MdCatchingPokemon, MdCameraRoll } from 'react-icons/md'
import { GiCat, GiVisoredHelm } from 'react-icons/gi'
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
  SiMicrosoftoffice,
  SiCinema4D
} from 'react-icons/si'
import { AvidIcon } from '../components/icons/avid-icon'
import SkillTag from '../components/skill-tags'
import ColoredText from '../components/colored-text'
import { CeltxIcon } from '../components/icons/celtx'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          display={{ md: 'flex' }}
          bgGradient={useColorModeValue(
            'linear(to-b,' +
              theme.colors.michalCream.saturated +
              '00 0%, ' +
              theme.colors.michalCream.saturated +
              'FF 25%)',
            'linear(to-b,' +
              theme.colors.michalGray.base +
              '00 0%, ' +
              theme.colors.michalGray.base +
              'FF 50%)'
          )}
        >
          <Box flexGrow={1} pt={5} pb={10}>
            <Heading as="h1" variant="page-title" pb={15}>
              Michal Špitálský
            </Heading>
            <Text>Hello everyone! I am Michal and I am a</Text>
            <TextLoop
              texts={[
                'graphic designer ✍️',
                'filmmaker 🎬',
                'web designer 🖥️',
                'digital artist 🎨'
              ]}
              textColors={[
                theme.colors.michalGreen.base,
                useColorModeValue(
                  theme.colors.highlight.light,
                  theme.colors.highlight.dark
                ),
                theme.colors.michalGreen.base,
                useColorModeValue(
                  theme.colors.highlight.light,
                  theme.colors.highlight.dark
                )
              ]}
            />
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 5, md: 7 }}
            ml={{ md: 6 }}
            mb={{ base: 2, md: 0 }}
            textAlign={{ base: 'left', md: 'center' }}
          >
            <Box
              borderColor="michalCream.base"
              borderWidth={2}
              borderStyle="solid"
              w="110px"
              h="110px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/michal.png"
                alt="Michal Špitálský"
                width="110px"
                height="110px"
              />
            </Box>
          </Box>
        </Box>
        <Divider
          mb={12}
          mt={8}
          opacity={0.2}
          borderColor={useColorModeValue(
            theme.colors.michalGray.base,
            theme.colors.michalCream.base
          )}
        />

        <Section delay="0.1">
          <Heading as="h2" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            I am a freelance designer, videographer and artist from Czechia who
            likes not to take life too seriously. I love to tweak and design all
            things digital or physical while exploring all the different fields
            of IT.
          </Paragraph>
          <Paragraph>
            In my free time, I seek hobbies where I can make use of my
            creativity and sense of humour. I am also working on my feature
            documentary{' '}
            <ColoredText textColor="highlight">
              &quot;Garden of Eden&quot;
            </ColoredText>
            .
          </Paragraph>
          <Box textAlign="left" my={4}>
            <PortfolioButton icon={<IoImagesSharp />} link="">
              Portfloio
            </PortfolioButton>
            <PortfolioButton icon={<AiOutlineFilePdf />} link="">
              PDF portfolio
            </PortfolioButton>
          </Box>
        </Section>

        <Section delay="0.6">
          <Heading as="h2" variant="section-title">
            What can I do?
          </Heading>
          <SkillBox>
            <Heading as="h3" variant="skill-title" mb={4}>
              SW &amp; technologies
            </Heading>
            <Wrap spacing={3}>
              <SkillIcon
                as={SiAdobephotoshop}
                name="Adobe Photoshop"
                skill={5}
              />
              <SkillIcon
                as={SiAdobeillustrator}
                name="Adobe Illustrator"
                skill={5}
              />
              <SkillIcon as={SiAdobeindesign} name="Adobe InDesign" skill={4} />
              <SkillIcon
                as={SiAdobepremierepro}
                name="Adobe Premiere Pro"
                skill={5}
              />
              <SkillIcon
                as={SiAdobeaftereffects}
                name="Adobe After Effects"
                skill={3}
              />
              <SkillIcon as={SiCinema4D} name="Cinema 4D" skill={3} />
              <SkillIcon as={SiAdobeaudition} name="Adobe Audition" skill={3} />
              <SkillIcon
                as={AvidIcon}
                name="AVID Media Composer"
                skill={3}
                w={12}
              />
              <SkillIcon as={SiHtml5} name="HTML 5" skill={5} />
              <SkillIcon as={SiCss3} name="CSS 3" skill={5} />
              <SkillIcon as={SiJavascript} name="JavaScript" skill={3} />
              <SkillIcon as={SiTypescript} name="TypeScript" skill={3} />
              <SkillIcon as={SiReact} name="React" skill={3} />
              <SkillIcon as={SiPhp} name="PHP" skill={4} />
              <SkillIcon as={SiWordpress} name="Wordpress" skill={5} />
              <SkillIcon
                as={SiMicrosoftoffice}
                name="Microsoft Office"
                skill={5}
              >
                ECDL certification
              </SkillIcon>
              <SkillIcon as={CeltxIcon} name="CeltX" skill={4} />
            </Wrap>
          </SkillBox>
          <SkillBox>
            <Heading as="h3" variant="skill-title" mb={4}>
              Main skills
            </Heading>
            <Wrap spacing={2}>
              <SkillTag icon={IoPricetag}>Brand design</SkillTag>
              <SkillTag icon={IoShapesSharp}>Vector illustration</SkillTag>
              <SkillTag icon={IoCalendarSharp}>Event design</SkillTag>
              <SkillTag icon={MdCameraRoll}>Event videography</SkillTag>
              <SkillTag icon={RiClapperboardFill}>Directing</SkillTag>
              <SkillTag icon={IoCamera}>Camera operating</SkillTag>
              <SkillTag icon={IoMic}>Sound recording</SkillTag>
              <SkillTag icon={RiScissorsFill}>Video editing</SkillTag>
              <SkillTag icon={RiQuillPenFill}>Screenwriting</SkillTag>
              <SkillTag icon={IoNewspaperSharp}>Copywriting</SkillTag>
            </Wrap>
          </SkillBox>
          {/*<NextLink href=""><Link>Inkscape</Link></NextLink>*/}
        </Section>

        <Section delay="1.1">
          <Heading as="h2" variant="section-title">
            How did I get here?
          </Heading>
        </Section>

        <Section delay="1.6">
          <Heading as="h2" variant="section-title">
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
                  Dungeons and Dragons
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

        <Section delay="2.1">
          <Heading as="h2" variant="section-title">
            Where can you find me?
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
