import { forwardRef, MutableRefObject } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

interface IProps {
  refe?: MutableRefObject<undefined>
}

export const ModelContainer: React.FC<IProps> = ({ children, refe }) => (
  <Box
    className="model"
    ref={refe}
    m="auto"
    mt={['-20px', '-60px']}
    mb={['-60px', '-120px']}
    w={[280, 480]}
    h={[280, 480]}
    position="relative"
  >
    {children}
  </Box>
)

const Loader: React.FC = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  )
}

export default Loader
