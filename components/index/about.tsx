import { Wrap, WrapItem, GridItem, Grid, Image } from '@chakra-ui/react'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { IoImagesSharp } from 'react-icons/io5'
import ColoredText from '../colored-text'
import Paragraph from '../paragraph'
import PortfolioButton from '../portfolio/portfolio-button'

const About = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={12}>
      <GridItem colSpan={{ base: 5, md: 3 }}>
        <Paragraph>
          I am a freelance designer, videographer and artist from Czechia who
          likes not to take life too seriously. I love to tweak and design all
          things digital or physical while exploring all the different fields of
          IT.
        </Paragraph>
        <Paragraph>
          In my free time, I seek hobbies where I can make use of my creativity
          and sense of humour. I am also working on my feature documentary{' '}
          <ColoredText textColor="highlight">
            &quot;Garden of Eden&quot;
          </ColoredText>
          .
        </Paragraph>
        <Wrap textAlign="left" mt={6}>
          <WrapItem>
            <PortfolioButton icon={<IoImagesSharp />} link="/portfolio">
              Portfloio
            </PortfolioButton>
          </WrapItem>
          <WrapItem>
            <PortfolioButton icon={<AiOutlineFilePdf />} link="">
              PDF portfolio
            </PortfolioButton>
          </WrapItem>
        </Wrap>
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 2 }}>
        <Image
          maxW={{ base: '80%', md: '100%' }}
          maxH={{ base: '250px', md: '100%' }}
          src="/images/gameboy.png"
          objectFit="contain"
        />
      </GridItem>
    </Grid>
  )
}

export default About
