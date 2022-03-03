import {
  Container,
  Box,
  useColorModeValue,
  Divider,
  Heading,
  Text,
  Wrap,
  AspectRatio
} from '@chakra-ui/react'
import theme from '../libs/theme'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import PortfolioItem from '../components/portfolio-item'
import PortfolioFilm from '../components/portfolio-film'
import PortfolioButton from '../components/portfolio-button'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFilmFill } from 'react-icons/ri'
import PortfolioProject from '../components/portfolio-project'
import ColoredText from '../components/colored-text'

const Portfolio = () => {
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
              My portfolio
            </Heading>
            <Text>A showcase of all the work that I am proud of ❤️</Text>
            <Box textAlign="left" my={4}>
              <PortfolioButton icon={<AiOutlineFilePdf />} link="">
                PDF portfolio
              </PortfolioButton>
              <PortfolioButton icon={<RiFilmFill />} link="#showreel">
                Showreel
              </PortfolioButton>
            </Box>
          </Box>
        </Box>
        <Divider
          mb={8}
          mt={2}
          opacity={0.2}
          borderColor={useColorModeValue(
            theme.colors.michalGray.base,
            theme.colors.michalCream.base
          )}
        />

        <Section delay="0.1">
          <Heading as="h2" variant="section-title">
            Design
          </Heading>
          <Wrap spacing={1.5}>
            <PortfolioItem img="/images/portfolio/connor-a-virus.png">
              Poetry book cover design
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/travelling-cart-poster.png">
              Stardew Valley inspired vintage poster
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/covid-portal.png">
              Logo design for the Czech government covid-19 portal
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/certification.png">
              Certification design
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-1.png">
              Tarot card designs
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/joja-poster.png">
              Stardew Valley inspired vintage poster
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-2.png">
              Tarot card design - the emperor
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/dead-fish.png">
              Logo for a parkour team &quot;dead fish&quot;
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/labska-logo.png">
              Logo for culinary high school e-sports team
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-3.png">
              Tarot card designs
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/spa-poster.png">
              Stardew Valley inspired vintage poster
            </PortfolioItem>
          </Wrap>
        </Section>

        <Section delay="0.6">
          <Heading as="h2" variant="section-title">
            Filmography
          </Heading>
          <Wrap spacing={4}>
            <PortfolioFilm img="/images/films/Send me an angel.png">
              Send me an angel (2018)
            </PortfolioFilm>
            <PortfolioFilm img="/images/films/Blocked Off.png">
              Blocked off (2021)
            </PortfolioFilm>
            <PortfolioFilm img="/images/films/Like Her.png">
              Like her (2021)
            </PortfolioFilm>
            <PortfolioFilm img="/images/films/Off the record.png">
              Off the record (2021)
            </PortfolioFilm>
          </Wrap>
        </Section>

        <Section delay="1.1">
          <Heading as="h2" variant="section-title">
            Projects
          </Heading>
          <PortfolioProject
            img="/images/films/Send me an angel.png"
            title="Rise of Pilgrims"
          >
            Since 2020 I have been working on creating assets for a browser game{' '}
            <ColoredText>Rise of Pilgrims</ColoredText>.
          </PortfolioProject>
        </Section>

        <Section delay="1.6">
          <div id="showreel">
            <Heading as="h2" variant="section-title">
              Showreel
            </Heading>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Michal Špitálský film showreel"
                src="https://www.youtube.com/embed/4KebR3ALzVc"
                allowFullScreen
              />
            </AspectRatio>
          </div>
        </Section>
      </Container>
    </Layout>
  )
}

export default Portfolio
