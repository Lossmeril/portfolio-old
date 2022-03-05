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
import theme from '../../libs/theme'

export const TimelineItemSmall = ({ children, img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody alignSelf="center">
            <Image src={img} alt={children} minW="150px" maxH="80vh" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        maxH={{ base: '200px', md: '150px' }}
        maxW={{ base: '45%', md: '300px' }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={useColorModeValue(
          theme.colors.michalGray.base + '33',
          theme.colors.michalCream.base + '33'
        )}
        transition="0.2s"
        onClick={onOpen}
        _hover={{
          cursor: 'pointer'
        }}
      >
        <Image
          objectFit="cover"
          height={{ base: '125px', md: '115px' }}
          width={{ base: 'sm', md: '100%' }}
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

export const TimelineItemLarge = ({
  type = 'image',
  title,
  img,
  width,
  children,
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalItem =
    type === 'image' ? (
      <Image src={img} alt={children} minW="150px" maxH="80vh" />
    ) : (
      <Box>
        <AspectRatio minW={{ base: '75vw', md: '560px' }} ratio={16 / 9}>
          <iframe
            title="Send me an angel - AURORA studio"
            src={videoUrl}
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    )

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody alignSelf="center">{modalItem}</ModalBody>
        </ModalContent>
      </Modal>
      <Box
        maxW={{ base: '92%', md: width }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={useColorModeValue(
          theme.colors.michalGray.base + '33',
          theme.colors.michalCream.base + '33'
        )}
        transition="0.2s"
        onClick={onOpen}
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

export const TimelineItemText = ({ children }) => {
  return (
    <Box
      height={{ base: 'auto', md: '150px' }}
      width={{ base: '45%', md: '150px' }}
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
