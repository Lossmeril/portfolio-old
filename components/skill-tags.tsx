import {
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
  WrapItem
} from '@chakra-ui/react'
import theme from '../libs/theme'

const SkillTag = ({ children, icon }) => {
  return (
    <WrapItem>
      <Tag
        size="md"
        variant="solid"
        backgroundColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
        color={useColorModeValue(
          theme.colors.michalGray.base,
          theme.colors.michalCream.base
        )}
        rounded={5}
        pt={1}
        pb={1}
        pr={3}
        pl={3}
      >
        <TagLeftIcon boxSize="12px" as={icon} />
        <TagLabel>{children}</TagLabel>
      </Tag>
    </WrapItem>
  )
}

export default SkillTag
