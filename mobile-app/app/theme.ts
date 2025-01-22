import { createTheme } from '@shopify/restyle'

const palette = {
  backgroundDarkBlue: '#000B21',
  backgroundLightBlue: '#014880',

  bluePrimary: '#203a72',
  bluePrimaryLight: '#6b7f99',

  yellowPrimary: '#ffDD05',
  greenPrimary: '#00A870',
  white: '#EEEEEE',
  grey: '#A9A9A9',
}

const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10)
}

const theme = createTheme({
  colors: {
    banner: palette.bluePrimary,
    backgroundDark: palette.backgroundDarkBlue,
    backgroundLight: palette.backgroundLightBlue,
    buttonPrimary: palette.bluePrimary,
    buttonDisabled: palette.bluePrimaryLight,
    success: palette.greenPrimary,
    highlight: palette.yellowPrimary,
    text: palette.white,
    textDisabled: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  borderRadii: {
    none: 0,
    s: 4,
    ms: 6,
    m: 8,
    lm: 10,
    l: 12,
    xl: 20,
    round: 1000,
  },

  buttonVariants: {
    menuButton: {
      disabled: {
        backgroundColor: 'buttonDisabled',
      },
      default: {
        width: 170,
        height: 200,
      },
    },
  },

  // todo use in custom component
  iconVariants: {
    default: { size: 70, color: 'text' },
    disabled: { color: 'textDisabled' },
  },

  textVariants: {
    banner: {
      fontFamily: 'Arial',
      fontSize: 55,
      lineHeight: 40,
      color: 'text',
    },
    header: {
      fontFamily: 'Roboto-Bold',
      fontSize: 34,
      lineHeight: 40,
      color: 'text',
    },
    subheader: {
      fontFamily: 'Roboto-Medium',
      fontSize: 28,
      lineHeight: 32,
      color: 'text',
    },
    body: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    caption: {
      fontFamily: 'Roboto-Light',
      fontSize: 12,
      lineHeight: 16,
      color: 'text',
    },
    buttonLabel: {
      fontFamily: 'Roboto-Bold',
      fontSize: 21,
      lineHeight: 24,
      color: 'text',
    },
    // todo figure out at better way to handle thiss
    buttonLabelDisabled: {
      fontFamily: 'Roboto-Bold',
      fontSize: 21,
      lineHeight: 24,
      color: 'textDisabled',
    },
  },
})

export type Theme = typeof theme
export default theme
