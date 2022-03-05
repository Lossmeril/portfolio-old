import { Box, Heading, useColorModeValue, Divider } from '@chakra-ui/react'
import theme from '../libs/theme'

const Header = ({ children, title, isIndex }) => {
  return (
    <>
      <Box flexGrow={1} pt={5} pb={isIndex ? 10 : 2}>
        <Heading as="h1" variant="page-title" pb={15}>
          {title}
        </Heading>
        {children}
      </Box>
      <Divider
        mb={12}
        mt={8}
        opacity={0.2}
        borderColor={useColorModeValue(
          theme.colors.michalGray.base,
          theme.colors.michalCream.base
        )}
      />
    </>
  )
}

export default Header
