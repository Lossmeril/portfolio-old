import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: Konnect Extra Bold;
            src: url(/fonts/KonnectExtraBold.otf);
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap');
    `}
    />
  )
}

export default Fonts
