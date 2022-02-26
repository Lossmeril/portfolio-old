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

import { AiOutlineFilePdf } from 'react-icons/ai'
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
            <TimelineItemText>
              Editing my first videos in{' '}
              <ColoredText>Windows Movie Maker</ColoredText>
            </TimelineItemText>
            <TimelineItemLarge
              title="First stop-motion animations"
              img="/images/journey/stop-motion-animations.gif"
              width="sm"
            >
              Experiments using <ColoredText>MS Paint</ColoredText> and{' '}
              <ColoredText>Windows Movie Maker</ColoredText>.
            </TimelineItemLarge>
            <TimelineItemLarge
              title="My first montages"
              img="/images/journey/first-montages.jpg"
              width="lg"
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
          </Timeline>

          <Timeline year="2015">
            <TimelineItemSmall img="/images/journey/mascot-productions.jpg">
              <ColoredText>Mascot Production&apos;s</ColoredText> final look
            </TimelineItemSmall>
            <TimelineItemSmall img="/images/journey/lokinmal.jpg">
              Concept art
            </TimelineItemSmall>
          </Timeline>

          <Timeline year="2016">
            <TimelineItemText>
              Started studying at <ColoredText>DELTA</ColoredText>
            </TimelineItemText>
          </Timeline>

          <Timeline year="2017">
            <TimelineItemText>
              Started studying at <ColoredText>DELTA</ColoredText>
            </TimelineItemText>
          </Timeline>
        </Section>
      </Container>
    </Layout>
  )
}

export default Journey
