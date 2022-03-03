import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  AspectRatio
} from '@chakra-ui/react'
import theme from '../libs/theme'

const PortfolioProject = ({ title, img, children }) => {
  return (
    <>
      <Box
        width="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={useColorModeValue(
          theme.colors.michalGray.base + '33',
          theme.colors.michalCream.base + '33'
        )}
        transition="0.2s"
        _hover={{
          background: useColorModeValue(
            theme.colors.highlight.light + '33',
            theme.colors.highlight.dark + '33'
          ),
          cursor: 'pointer'
        }}
      >
        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={{ base: 3, md: 2 }}>
            <Image
              objectFit="cover"
              height={{ base: '100%', md: '150px' }}
              width={{ base: '100%', md: '100%' }}
              src={img}
              alt={title}
            />
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 4 }}>
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

export default PortfolioProject
