import { Container, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import Section from '../components/section'
import TextLoop from '../components/text-loop'
import theme from '../libs/theme'
import Layout from '../components/layouts/article'
import SkillBox from '../components/index/skill-box'
import BusinessCard from '../components/index/business-card'
import Header from '../components/header'
import SwAndTech from '../components/index/sw-and-tech'
import Skills from '../components/index/skills'
import Hobbies from '../components/index/hobbies'
import About from '../components/index/about'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Header title="Michal Špitálský" isIndex={true}>
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
        </Header>

        <Section delay="0.1">
          <Heading as="h2" variant="section-title" mb={8}>
            Who am I?
          </Heading>
          <About />
        </Section>

        <Section delay="0.6">
          <Heading as="h2" variant="section-title">
            What can I do?
          </Heading>
          <SkillBox>
            <Heading as="h3" variant="skill-title" mb={4}>
              SW &amp; technologies
            </Heading>
            <SwAndTech />
          </SkillBox>
          <SkillBox>
            <Heading as="h3" variant="skill-title" mb={4}>
              Main skills
            </Heading>
            <Skills />
          </SkillBox>
        </Section>

        <Section delay="1.1">
          <Heading as="h2" variant="section-title">
            What do I love?
          </Heading>
          <Hobbies />
        </Section>
        <Section delay="1.6">
          <Heading as="h2" variant="section-title" mb={10}>
            Have my business card
          </Heading>
          <BusinessCard />
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
