import {
  Box,
  AspectRatio,
  List,
  useColorModeValue,
  Heading,
  Grid,
  GridItem,
  Image,
  Divider,
  Stack
} from '@chakra-ui/react'
import Tilt from 'react-tilt'
import theme from '../libs/theme'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import BusinessCardLink from './business-card-link'
import ColoredText from './colored-text'

const BusinessCard = () => {
  return (
    <Tilt className="Tilt" options={{ max: 20, scale: 1.05 }}>
      <AspectRatio width="75%" ratio={85 / 55} className="Tilt-inner">
        <>
          <Image
            src="/images/paper.jpg"
            width="100%"
            height="100%"
            position="absolute"
            zIndex={3}
            blendMode="multiply"
            pointerEvents="none"
          />
          <Box
            bgGradient={
              'linear(to-br, ' +
              theme.colors.michalGray.base +
              ', ' +
              theme.colors.michalGray.darker +
              ')'
            }
            textAlign="left"
          >
            <Grid
              templateColumns="repeat(3, 1fr)"
              width="100%"
              ml="50px"
              mr="150px"
            >
              <GridItem colSpan={3}>
                <Heading as="p" variant="business-card">
                  Michal{' '}
                  <ColoredText textColor={theme.colors.michalGreen.base}>
                    Špitálský
                  </ColoredText>
                  <Divider
                    mt={5}
                    mb={5}
                    borderBottomColor={theme.colors.michalCream.base}
                  />
                </Heading>
              </GridItem>
              <GridItem colSpan={3}>
                <List>
                  <BusinessCardLink
                    href="https://www.facebook.com/lossmeril/"
                    icon={IoLogoFacebook}
                  >
                    /lossmeril
                  </BusinessCardLink>
                  <BusinessCardLink
                    href="https://www.linkedin.com/in/michal-spitalsky/"
                    icon={IoLogoLinkedin}
                  >
                    /michal-spitalsky
                  </BusinessCardLink>
                  <BusinessCardLink
                    href="https://github.com/Lossmeril"
                    icon={IoLogoGithub}
                  >
                    @Lossmeril
                  </BusinessCardLink>
                </List>
              </GridItem>
            </Grid>
            <Image
              src="/images/bc-logo.png"
              width="200px"
              height="200px"
              position="absolute"
              bottom="40px"
              right="-100px"
            />
          </Box>
        </>
      </AspectRatio>
    </Tilt>
  )
}

export default BusinessCard
