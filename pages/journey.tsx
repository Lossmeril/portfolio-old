import {
  Container,
  Box,
  useColorModeValue,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import theme from '../libs/theme'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Timeline from '../components/timeline'
import {
  TimelineItemSmall,
  TimelineItemLarge,
  TimelineItemText
} from '../components/timeline-item'
import ColoredText from '../components/colored-text'

const Journey = () => {
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
              My journey
            </Heading>
            <Text>
              Some things are just too old to include in the portfolio...
              However, without them I would not be where I am now! ❤️
            </Text>
            <Text>And I must say I made some progress...!</Text>
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
          <Timeline year="2012">
            <TimelineItemLarge
              title="First stop-motion animations"
              img="/images/journey/stop-motion-animations.gif"
              width="sm"
            >
              Experiments using <ColoredText>MS Paint</ColoredText> and{' '}
              <ColoredText>Windows Movie Maker</ColoredText>.
            </TimelineItemLarge>
            <TimelineItemText>
              Editing my first videos in{' '}
              <ColoredText>Windows Movie Maker</ColoredText>
            </TimelineItemText>
            <TimelineItemSmall img="/images/journey/first-logo.png">
              Logo
            </TimelineItemSmall>
            <TimelineItemLarge
              title="My first montages"
              img="/images/journey/first-montages.jpg"
              width="sm"
            >
              At this point I &quot;designed&quot; mainly using{' '}
              <ColoredText>Power Point</ColoredText> to remove background and
              subsequently <ColoredText>MS Paint</ColoredText> to join the
              elements.
            </TimelineItemLarge>
          </Timeline>

          <Timeline year="2013">
            <TimelineItemText>
              Starting to experiment with 3D graphics in{' '}
              <ColoredText>Blender</ColoredText>
            </TimelineItemText>

            <TimelineItemLarge
              title="a movie studio founded"
              img="/images/journey/first-3d.jpg"
              width="sm"
            >
              My friends and I started a film studio{' '}
              <ColoredText>Mascot Productions</ColoredText> at elementary
              school.
            </TimelineItemLarge>
          </Timeline>

          <Timeline year="2014">
            <TimelineItemLarge
              title='first "feature" film'
              img="/images/journey/mascot-holmes.jpg"
              width="sm"
            >
              <ColoredText>Mascot Holmes</ColoredText> - a film about a crime
              solving tennis ball we made as kids. Twist on &quot;Detective
              Pikachu&quot; ahead of its time
            </TimelineItemLarge>

            <TimelineItemText>
              Making photo videos for my class in{' '}
              <ColoredText>Camtasia Studio 7</ColoredText>
            </TimelineItemText>

            <TimelineItemSmall img="/images/journey/dnd.jpg">
              D&amp;D illustration
            </TimelineItemSmall>

            <TimelineItemText>
              Started using <ColoredText>PhotoFiltre studio</ColoredText> for my
              static graphics
            </TimelineItemText>
          </Timeline>

          <Timeline year="2015">
            <TimelineItemText>
              Switched to <ColoredText>Cinema 4D</ColoredText> for 3D graphics
            </TimelineItemText>
            <TimelineItemSmall img="/images/journey/mascot-productions.jpg">
              <ColoredText>Mascot Production&apos;s</ColoredText> final look
            </TimelineItemSmall>
            <TimelineItemSmall img="/images/journey/lokinmal.jpg">
              Concept art
            </TimelineItemSmall>
            <TimelineItemSmall img="/images/journey/3d-render-concept.jpg">
              3D render based on the concept art
            </TimelineItemSmall>
          </Timeline>

          <Timeline year="2016">
            <TimelineItemSmall img="/images/journey/3d-winter.jpg">
              3D render
            </TimelineItemSmall>
            <TimelineItemSmall img="/images/journey/dungeon-cover.jpg">
              Magazine cover
            </TimelineItemSmall>
            <TimelineItemSmall img="/images/journey/3d-zeletava.jpg">
              3D render
            </TimelineItemSmall>
            <TimelineItemText>
              Started studying at <ColoredText>DELTA</ColoredText>
            </TimelineItemText>
            <TimelineItemSmall img="/images/journey/musical-poster.jpg">
              Poster
            </TimelineItemSmall>
            <TimelineItemText>
              Switching my workflow into{' '}
              <ColoredText>Adobe Creative Cloud</ColoredText> suite.
            </TimelineItemText>
          </Timeline>

          <Timeline year="2017">
            <TimelineItemSmall img="/images/journey/skyzio-logo.png">
              Logo
            </TimelineItemSmall>
            <TimelineItemLarge
              title="first steps in digital art"
              img="/images/journey/first-drawing.jpg"
              width="sm"
            >
              After getting my hands on my trusty graphic tablet, I dove right
              into digital art, starting with a medieval fantasy spy scene.
            </TimelineItemLarge>
          </Timeline>

          <Timeline year="2018">
            <TimelineItemLarge
              title="send me an angel project"
              img="/images/journey/send-me-an-angel.jpg"
              width="lg"
              type="video"
              videoUrl="https://www.youtube.com/embed/z0cQYvOAgxE"
            >
              My first major video project which involved all the different
              production roles, securing locations and costumes.
            </TimelineItemLarge>

            <TimelineItemSmall img="/images/journey/hamster.png">
              Hamster illustration
            </TimelineItemSmall>

            <TimelineItemSmall img="/images/journey/logo-health.png">
              Logo
            </TimelineItemSmall>
          </Timeline>

          <Timeline year="2019">
            <TimelineItemSmall img="/images/journey/dnd-2.jpg">
              D&amp;D characters
            </TimelineItemSmall>
          </Timeline>

          <Timeline year="2020">
            <TimelineItemText>
              Started studying at{' '}
              <ColoredText>Northumbria University</ColoredText>
            </TimelineItemText>
          </Timeline>
        </Section>
      </Container>
    </Layout>
  )
}

export default Journey
