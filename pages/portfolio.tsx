import {
  Container,
  Box,
  useColorModeValue,
  Divider,
  Heading,
  Text,
  Wrap
} from '@chakra-ui/react'
import theme from '../libs/theme'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import PortfolioItem from '../components/portfolio-item'
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
          </Box>
        </Box>
        <Divider
          mb={5}
          mt={2}
          opacity={0.2}
          borderColor={useColorModeValue(
            theme.colors.michalGray.base,
            theme.colors.michalCream.base
          )}
        />

        <Section delay="0.6">
          <Wrap spacing={1.5}>
            <PortfolioItem img="/images/portfolio/connor-a-virus.png">
              poetry book cover design
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/covid-portal.png">
              Logo design for the Czech government covid-19 portal
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-1.png">
              tarot card designs
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-2.png">
              tarot card design - the emperor
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/dead-fish.png">
              Logo for a parkour team "dead fish
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/labska-logo.png">
              Logo for culinary high school e-sports team
            </PortfolioItem>
            <PortfolioItem img="/images/portfolio/tarot-3.png">
              tarot card designs
            </PortfolioItem>
          </Wrap>
        </Section>
      </Container>
    </Layout>
  )
}

export default Portfolio
