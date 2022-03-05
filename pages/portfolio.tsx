import { Container, Box, Heading, Text, AspectRatio } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import PortfolioButton from '../components/portfolio/portfolio-button'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFilmFill } from 'react-icons/ri'
import Header from '../components/header'
import PortfolioSectionDesign from '../components/portfolio/portfolio-section-design'
import PortfolioSectionProjects from '../components/portfolio/portfolio-section-projects'
import PortfolioSectionFilms from '../components/portfolio/portfolio-section-films'

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Header title="My portfolio" isIndex={false}>
          <Text>A showcase of all the work that I am proud of ❤️</Text>
          <Box textAlign="left" mt={4}>
            <PortfolioButton icon={<AiOutlineFilePdf />} link="">
              PDF portfolio
            </PortfolioButton>
            <PortfolioButton icon={<RiFilmFill />} link="#showreel">
              Showreel
            </PortfolioButton>
          </Box>
        </Header>

        <Section delay="0.1">
          <Heading as="h2" variant="section-title">
            Design
          </Heading>
          <PortfolioSectionDesign />
        </Section>

        <Section delay="0.6">
          <Heading as="h2" variant="section-title">
            Filmography
          </Heading>
          <PortfolioSectionFilms />
        </Section>

        <Section delay="1.1">
          <Heading as="h2" variant="section-title">
            Projects
          </Heading>
          <PortfolioSectionProjects />
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
