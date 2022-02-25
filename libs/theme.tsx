import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = {
  heading: "'Konnect Extra Bold', sans-serif",
  body: "'Poppins', sans-serif"
}

const colors = {
  michalCream: {
    base: '#F4F4F4',
    saturated: '#F0E7DB'
  },
  michalGreen: {
    base: '#48BF84',
    saturated: '#202023'
  },
  michalGray: {
    base: '#1E1E1E',
    darker: '#121212'
  },
  highlight: {
    dark: '#FF63C3',
    light: '#3D7AED'
  }
}

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.michalCream.saturated, colors.michalGray.base)(props)
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
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 6,
        textTransform: 'lowercase'
      },
      'skill-title': props => ({
        fontSize: 18,
        textTransform: 'lowercase',
        color: mode(colors.highlight.light, colors.highlight.dark)(props)
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode(colors.highlight.light, colors.highlight.dark)(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'skill-icon': props => ({
        color: mode(colors.michalGray.base, colors.michalCream.base)(props),

        '&:hover': {
          color: colors.michalGreen.base
        }
      })
    }
  },
  ListIcon: {
    basestyle: props => ({
      fill: mode(colors.highlight.light, colors.highlight.dark)(props)
    })
  }
}

const config = {
  initialColorMode: 'dark'
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
