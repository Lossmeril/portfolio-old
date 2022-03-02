import { Box, Image, Heading, AspectRatio } from '@chakra-ui/react'

const PortfolioFilm = ({ children, img }) => {
  return (
    <Box width={{ base: '100%', md: '46%' }}>
      <Image
        src={img}
        maxW="90%"
        height="88%"
        objectFit="contain"
        boxShadow="-5px 5px 15px -6px #000000"
        alignSelf="center"
        ml="auto"
        mr="auto"
      />

      <Heading variant="film-title" as="h3" textAlign="center" mt={3}>
        {children}
      </Heading>
    </Box>
  )
}

export default PortfolioFilm
