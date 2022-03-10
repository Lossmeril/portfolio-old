import { Container, Text, Heading } from '@chakra-ui/react'
import Header from '../components/header'
import BusinessCard from '../components/index/business-card'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Header title="Get in touch!" isIndex={false}>
          <Text>
            Interested in my skills? 🎞 Wanna cooperate? 🙌 Just wanna chat? 💬
          </Text>
          <Text>Drop me a message! 📨</Text>
        </Header>
        <Section delay="0.1">
          <Heading as="h2" variant="section-title" mb={10}>
            Have my business card
          </Heading>
          <BusinessCard />
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
