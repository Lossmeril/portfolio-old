import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = {
  heading: "'Konnect Extra Bold', sans-serif",
  body: "'Poppins'"
}

const colors = {
  michalCream: {
    base: '#F4F4F4',
    saturated: '#F0E7DB'
  },
  michalGreen: {
    base: '#48BF84',
    saturated: "#00FF79"
  },
  michalGray: '#1E1E1E',

  michalPink: "#3D7AED",
  michalGold: "#FFCA1C",
}

const gradients = {
  gradientGreen: "linear-gradient(90deg, rgba(72,191,132,1) 0%, rgba(0,255,121,1) 100%)",
}

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.michalPink, '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 10,
        textDecorationColor: colors.michalGreen.base,
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 6
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors, gradients })
export default theme