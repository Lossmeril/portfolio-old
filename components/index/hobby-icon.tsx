import { ListIcon, useColorModeValue } from '@chakra-ui/react'
import theme from '../../libs/theme'

const HobbyIcon = ({ as }) => {
  return (
    <ListIcon
      as={as}
      fill={useColorModeValue(
        theme.colors.highlight.light,
        theme.colors.highlight.dark
      )}
    />
  )
}

export default HobbyIcon
