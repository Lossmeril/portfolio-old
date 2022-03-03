import NextLink from 'next/link'
import { Box, Heading, Text, Container, Link } from '@chakra-ui/react'
import Section from '../components/section'

const NotFound = () => {
  return (
    <Container>
      <Box flexGrow={1} pt={5} pb={10}>
        <Heading as="h1" variant="page-title" pb={15}>
          404: It&apos;s not very effective
        </Heading>
        <Section delay="0.1">
          <Text mb={5}>
            Oops, we&apos;ve got ourselves a &quot;page not found&quot; error.
            Feel free to contact me if you think that I overlooked somehing.
          </Text>
          <Text mb={5}>
            Either way you can return to the homepage using link below.
          </Text>
          <NextLink href="/" passHref>
            <Link>Marty, we&apos;re going back to the homepage!</Link>
          </NextLink>
        </Section>
      </Box>
    </Container>
  )
}

export default NotFound
