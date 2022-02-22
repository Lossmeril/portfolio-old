import { color, extendTheme, IconButton } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = {
  heading: "'Konnect Extra Bold'"
}

const colors = {
  michalCream: '#F4F4F4',
  michalGreen: '#48BF84',
  michalGray: '#1E1E1E',

  michalCreamSaturated: "#F0E7DB",
  michalGreenSaturated: "#00FF79"
}

const gradients = {
  gradientGreen: "linear-gradient(90deg, rgba(72,191,132,1) 0%, rgba(0,255,121,1) 100%)",
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
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
        textDecorationColor: colors.michalGreen,
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
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