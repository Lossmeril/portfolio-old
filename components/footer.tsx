import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.8} fontSize="sm">
      <Text mb={2}>
        &copy; {new Date().getFullYear()} Michal Špitálský. All Rights Reserved.
      </Text>
      <Text mb={2}>
        Based on a tutorial by{' '}
        <Link href="https://craftz.dog" target="_blank">
          Takuya Matsuyama
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
