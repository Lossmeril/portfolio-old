import { useColorModeValue } from '@chakra-ui/react'
import theme from '../libs/theme'

const ColoredText = ({ children, textColor = 'highlight' }) => {
  const colorValue = useColorModeValue(
    theme.colors.highlight.light,
    theme.colors.highlight.dark
  )
  const highlightColor = textColor === 'highlight' ? colorValue : textColor
  return <span style={{ color: highlightColor }}>{children}</span>
}

export default ColoredText
