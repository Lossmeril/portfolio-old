import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  ModalCloseButton,
  Box,
  useColorModeValue,
  useDisclosure,
  AspectRatio,
  Heading,
  WrapItem
} from '@chakra-ui/react'
import theme from '../../libs/theme'
import { AnimatePresence, motion } from 'framer-motion'

const PortfolioItem = ({ children, img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody alignSelf="center">
            <Image src={img} alt={children} minW="150px" maxH="80vh" />
            <Heading as="h3" mt={5} variant="section-title">
              {children}
            </Heading>
          </ModalBody>
        </ModalContent>
      </Modal>

      <AspectRatio width={{ base: '49%', md: '23%' }} ratio={1}>
        <AnimatePresence>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
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
              onClick={onOpen}
              _hover={{
                background: useColorModeValue(
                  theme.colors.highlight.light + '33',
                  theme.colors.highlight.dark + '33'
                ),
                cursor: 'pointer'
              }}
            >
              <Image
                objectFit="cover"
                height={{ base: '100%', md: '100%' }}
                width={{ base: '100%', md: '100%' }}
                src={img}
                alt={children}
              />
            </Box>
          </motion.div>
        </AnimatePresence>
      </AspectRatio>
    </>
  )
}

export default PortfolioItem
