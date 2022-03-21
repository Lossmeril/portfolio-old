import PortfolioItem from './portfolio-item'
import PortfolioSection from './portfolio-section'

const designs = [
  {
    name: 'Poetry book cover design',
    img: 'connor-a-virus.png'
  },
  {
    name: 'Stardew Valley inspired vintage poster',
    img: 'travelling-cart-poster.png'
  },
  {
    name: 'Logo design for the Czech government covid-19 portal',
    img: 'covid-portal.png'
  },
  {
    name: 'Certification design',
    img: 'certification.png'
  },
  {
    name: 'Tarot card designs',
    img: 'tarot-1.png'
  },
  {
    name: 'FORT company logo',
    img: 'fort-logo.png'
  },
  {
    name: 'Heraldic coat of arms design',
    img: 'coat-of-arms.png'
  },
  {
    name: 'Stardew Valley inspired vintage poster',
    img: 'joja-poster.png'
  },
  {
    name: 'Tarot card design - the emperor',
    img: 'tarot-2.png'
  },
  {
    name: 'Logo for a parkour team "dead fish"',
    img: 'dead-fish.png'
  },
  {
    name: 'Logo for culinary high school e-sports team',
    img: 'labska-logo.png'
  },
  {
    name: 'Tarot card designs',
    img: 'tarot-3.png'
  },
  {
    name: 'Stardew Valley inspired vintage poster',
    img: 'spa-poster.png'
  }
]

const PortfolioSectionDesign = () => {
  return (
    <PortfolioSection spacing={1.5}>
      {designs.map(design => (
        <PortfolioItem
          img={'/images/portfolio/' + design.img}
          key={design.name}
        >
          {design.name}
        </PortfolioItem>
      ))}
    </PortfolioSection>
  )
}

export default PortfolioSectionDesign
