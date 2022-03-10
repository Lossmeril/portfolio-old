import PortfolioFilm from './portfolio-film'
import PortfolioSection from './portfolio-section'

const films = [
  {
    name: 'Send me an angel (2018)',
    img: 'Send me an angel.png'
  },
  {
    name: 'Blocked off (2021)',
    img: 'Blocked Off.png'
  },
  {
    name: 'Like her (2021)',
    img: 'Like Her.png'
  },
  {
    name: 'Off the record (2021)',
    img: 'Off the record.png'
  }
]

const PortfolioSectionFilms = () => {
  return (
    <PortfolioSection>
      {films.map(film => (
        <PortfolioFilm img={'/images/films/' + film.img}>
          {film.name}
        </PortfolioFilm>
      ))}
    </PortfolioSection>
  )
}

export default PortfolioSectionFilms
