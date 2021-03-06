import {
  Icon,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Popover,
  Link,
  Heading,
  useColorModeValue,
  WrapItem
} from '@chakra-ui/react'
import { RiStarFill, RiStarLine } from 'react-icons/ri'
import theme from '../../libs/theme'

const SkillIcon = ({
  as,
  name = 'not filleld',
  skill = 0,
  w = 8,
  h = 8,
  children = ''
}) => {
  const color = useColorModeValue(
    theme.colors.highlight.light,
    theme.colors.highlight.dark
  )
  return (
    <>
      <WrapItem>
        <Popover placement="top-start" trigger="hover">
          <PopoverTrigger>
            <Link variant="skill-icon">
              <Icon as={as} w={w} h={h} />
            </Link>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Heading variant="skill-title" pb={2} pt={1}>
                {name}
              </Heading>
              <p>
                My skill:{' '}
                {Array.apply(null, { length: skill }).map((e, i) => (
                  <span key={i}>
                    <Icon as={RiStarFill} mr={2} color={color} />
                  </span>
                ))}
                {Array.apply(null, { length: 5 - skill }).map((e, i) => (
                  <span key={i}>
                    <Icon as={RiStarLine} mr={2} />
                  </span>
                ))}
              </p>
              <p>{children}</p>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </WrapItem>
    </>
  )
}

export default SkillIcon
