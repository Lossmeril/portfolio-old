import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import theme from '../libs/theme'

export const TimelineItemSmall = ({ children, img }) => {
  return (
    <>
      <Box
        maxH="150px"
        maxW="200px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={useColorModeValue(
          theme.colors.michalGray.base + '33',
          theme.colors.michalCream.base + '33'
        )}
      >
        <Image
          objectFit="cover"
          height="115px"
          maxW="150px"
          width="100%"
          src={img}
          alt={children}
        />

        <Box p={1.5} ml={1.5}>
          <Text fontSize={12}>{children}</Text>
        </Box>
      </Box>
    </>
  )
}

export const TimelineItemLarge = ({ title, img, width, children }) => {
  return (
    <>
      <Box
        maxW={width}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={useColorModeValue(
          theme.colors.michalGray.base + '33',
          theme.colors.michalCream.base + '33'
        )}
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={1}>
            <Image
              objectFit="cover"
              height="150px"
              maxW="100%"
              src={img}
              alt="Obraz"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Box p={5}>
              <Heading as="h4" variant="timeline-title">
                {title}
              </Heading>
              <Text fontSize={12}>{children}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export const TimelineItemText = ({ children }) => {
  return (
    <Box
      height="150px"
      width="150px"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={useColorModeValue(
        theme.colors.michalGray.base + '33',
        theme.colors.michalCream.base + '33'
      )}
      p={3}
      overflow="hidden"
    >
      <Heading as="p" variant="timeline-title">
        {children}
      </Heading>
    </Box>
  )
}

export default TimelineItemSmall
