import NextLink from 'next/link'
import { Link, ListItem, ListIcon } from '@chakra-ui/react'

const BusinessCardLink = ({ children, icon, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link target="_blank" variant="business-card">
        <ListItem mt={1.5}>
          <ListIcon as={icon} />
          {children}
        </ListItem>
      </Link>
    </NextLink>
  )
}

export default BusinessCardLink
