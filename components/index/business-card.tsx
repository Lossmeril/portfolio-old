import {
  Box,
  AspectRatio,
  List,
  Heading,
  Grid,
  GridItem,
  Image,
  Divider
} from '@chakra-ui/react'
import Tilt from 'react-tilt'
import theme from '../../libs/theme'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import BusinessCardLink from './business-card-link'
import ColoredText from '../colored-text'

const BusinessCard = () => {
  return (
    <Tilt className="Tilt" options={{ max: 20, scale: 1.05 }}>
      <AspectRatio
        width={{ base: '300px', md: '430px' }}
        ratio={85 / 55}
        className="Tilt-inner"
      >
        <>
          <Image
            src="/images/paper.jpg"
            width="100%"
            height="100%"
            position="absolute"
            zIndex={3}
            blendMode="multiply"
            pointerEvents="none"
            alt="business card"
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
              ml={{ base: '35px', md: '50px' }}
              mr={{ base: '100px', md: '150px' }}
            >
              <GridItem colSpan={3}>
                <Heading
                  as="p"
                  variant="business-card"
                  fontSize={{ base: '15pt', md: '22pt' }}
                >
                  Michal{' '}
                  <ColoredText textColor={theme.colors.michalGreen.base}>
                    Špitálský
                  </ColoredText>
                  <Divider
                    mt={{ base: 2.5, md: 5 }}
                    mb={{ base: 2.5, md: 5 }}
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
              width={{ base: '125px', md: '200px' }}
              height={{ base: '125px', md: '200px' }}
              position="absolute"
              bottom="40px"
              right={{ base: '-62.5px', md: '-100px' }}
              alt="logo"
            />
          </Box>
        </>
      </AspectRatio>
    </Tilt>
  )
}

export default BusinessCard
