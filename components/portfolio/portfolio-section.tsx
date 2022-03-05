import { Wrap } from '@chakra-ui/react'

const PortfolioSection = ({ children, spacing = 4 }) => {
  return <Wrap spacing={spacing}>{children}</Wrap>
}

export default PortfolioSection
