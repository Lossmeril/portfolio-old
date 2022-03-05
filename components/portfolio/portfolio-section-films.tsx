import PortfolioFilm from './portfolio-film'
import PortfolioSection from './portfolio-section'

const PortfolioSectionFilms = () => {
  return (
    <PortfolioSection>
      <PortfolioFilm img="/images/films/Send me an angel.png">
        Send me an angel (2018)
      </PortfolioFilm>
      <PortfolioFilm img="/images/films/Blocked Off.png">
        Blocked off (2021)
      </PortfolioFilm>
      <PortfolioFilm img="/images/films/Like Her.png">
        Like her (2021)
      </PortfolioFilm>
      <PortfolioFilm img="/images/films/Off the record.png">
        Off the record (2021)
      </PortfolioFilm>
    </PortfolioSection>
  )
}

export default PortfolioSectionFilms
