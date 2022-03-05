import NextLink from 'next/link'
import { Link, ListItem, ListIcon } from '@chakra-ui/react'

const BusinessCardLink = ({ children, icon, href }) => {
  return (
    <ListItem mt={{ base: 2, md: 1.5 }} fontSize={{ base: '9pt', md: '12pt' }}>
      <NextLink href={href} passHref>
        <Link target="_blank" variant="business-card">
          <ListIcon as={icon} />
          {children}
        </Link>
      </NextLink>
    </ListItem>
  )
}

export default BusinessCardLink
