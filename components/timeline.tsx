import { Wrap, Heading } from '@chakra-ui/react'

const Timeline = ({ children, year = '---' }) => {
  return (
    <>
      <Heading as="h2" variant="section-title" mt={10}>
        {year}
      </Heading>
      <Wrap>{children}</Wrap>
    </>
  )
}

export default Timeline
