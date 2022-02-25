import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

const SkillTag = ({ children, icon }) => {
  return (
    <Tag size="md" variant="solid">
      <TagLeftIcon boxSize="12px" as={icon} />
      <TagLabel>{children}</TagLabel>
    </Tag>
  )
}

export default SkillTag
