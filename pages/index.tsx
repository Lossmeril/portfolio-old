import PortfolioButton from '../components/portfolio/portfolio-button'

const IndexPageSplashScreen = () => {
  return (
    <div className="splash-screen-box">
      <div>
        <h1>The shoemaker's Michal goes barefoot</h1>
        <p>
          As I simply love making your visions come true, I don't have enough
          time to work on my visions!
        </p>
        <p>But don't worry, a new website is soon to come!</p>
        <p>You can still visit the old one, though it might be a bit broken.</p>
        <PortfolioButton link="/home" icon={undefined}>
          Continue to old web
        </PortfolioButton>
      </div>
    </div>
  )
}

export default IndexPageSplashScreen
