import NextLink from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'
import theme from '../../libs/theme'

const PortfolioButton = ({ children, icon, link }) => {
  return (
    <NextLink href={link} passHref>
      <Button
        leftIcon={icon}
        mr={3}
        backgroundColor={useColorModeValue(
          theme.colors.michalGray.base,
          theme.colors.michalCream.base
        )}
        color={useColorModeValue(
          theme.colors.michalCream.base,
          theme.colors.michalGray.base
        )}
        _hover={{
          backgroundColor: useColorModeValue(
            theme.colors.michalGreen.base,
            theme.colors.michalGreen.base
          ),
          color: useColorModeValue(
            theme.colors.michalCream.saturated,
            theme.colors.michalGray.base
          )
        }}
      >
        {children}
      </Button>
    </NextLink>
  )
}

export default PortfolioButton
