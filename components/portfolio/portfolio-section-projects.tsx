import ColoredText from '../colored-text'
import PortfolioProject from './portfolio-project'
import PortfolioSection from './portfolio-section'

const PortfolioSectionProjects = () => {
  return (
    <PortfolioSection>
      <PortfolioProject
        img="/images/projects/rise-of-pilgrims.jpg"
        title="Rise of Pilgrims"
      >
        Since 2020 I have been working on creating assets for a browser game{' '}
        <ColoredText>Rise of Pilgrims</ColoredText>.
      </PortfolioProject>
    </PortfolioSection>
  )
}

export default PortfolioSectionProjects
