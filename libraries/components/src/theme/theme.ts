import { alpha, createTheme, radioClasses } from '@mui/material'
import { app, colors } from './settings'
import buttonStyles from './partials/buttonStyles'
import { rem } from 'polished'
import linkStyles from './partials/linkStyles'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import { cardStyles } from './partials/cardStyles'
import { iconButtonStyles } from './partials/iconButtonStyles'
import { publiekePartnerPalette } from './partials/publiekePartnerPalette.ts'
import { dialog, dialogTitle } from './partials/dialogStyles'

const base = createTheme({
  spacing: app.spacing,
})

interface PaletteKeys {
  main?: string
  '50'?: string
  '100'?: string
  '200'?: string
  '300'?: string
  '400'?: string
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    appBackground?: {
      light?: string
      main?: string
      backdrop?: string
    }
    borderColor?: {
      light?: string
      main?: string
    }
    panelColor?: {
      light?: string
      main?: string
    }
    grayScale?: {
      lightest?: string
      lighter?: string
      light?: string
      main?: string
      dark?: string
      darker?: string
      darkest?: string
    }
    tertiary?: {
      main?: string
      dark?: string
    }
    blueScale?: {
      lightest?: string
      lighter?: string
      light?: string
    }
    greenScale?: {
      lightest?: string
      lighter?: string
      light?: string
      main?: string
      dark?: string
      darker?: string
    }
    v1?: {
      primary?: {
        black?: string
        light?: string
      }
      text?: {
        primary?: string
      }
      info?: {
        dark?: string
      }
      gray?: {
        lightest?: string
        lighter?: string
        light?: string
        main?: string
        dark?: string
      }
      green: {
        lightest: string
      }
    }
    publiekepartner?: {
      brand?: PaletteKeys
      neutral?: PaletteKeys
      textScale?: {
        '50'?: string
        '100'?: string
        '200'?: string
        '300'?: string
        '400'?: string
        '500'?: string
      }
    }
  }

  interface BreakpointOverrides {
    xsV1: true
    smV1: true
    mdV1: true
    lgV1: true
    xlV1: true
    xxlV1: true
    xxxlV1: true
  }
}

declare module '@mui/material/Box' {
  interface BoxSystemProps {
    href: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    primaryLink: true
    secondaryLink: true
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 584,
      md: 888,
      lg: 1240,
      xl: 2000,
      xsV1: 320,
      smV1: 584,
      mdV1: 888,
      lgV1: 120,
      xlV1: 2000,
      xxlV1: 2200,
      xxxlV1: 2400,
    },
  },
  spacing: base.spacing,
  palette: {
    v1: {
      primary: {
        black: colors.v1.black,
        light: colors.v1.gray.light,
      },
      text: {
        primary: colors.v1.black,
      },
      info: {
        dark: colors.v1.info.dark,
      },
      gray: {
        lightest: colors.v1.gray.lightest,
        lighter: colors.v1.gray.lighter,
        light: colors.v1.gray.light,
        main: colors.v1.gray.main,
        dark: colors.v1.gray.dark,
      },
      green: {
        lightest: colors.v1.green.lightest,
      },
    },
    common: {
      black: colors.common.black,
      white: colors.common.white,
    },
    blueScale: {
      lightest: colors.blueScale.lightest,
      lighter: colors.blueScale.lighter,
      light: colors.blueScale.light,
    },
    grayScale: {
      lightest: colors.grayScale.lightest,
      lighter: colors.grayScale.lighter,
      light: colors.grayScale.light,
      main: colors.grayScale.main,
      dark: colors.grayScale.dark,
      darker: colors.grayScale.darker,
      darkest: colors.grayScale.darkest,
    },
    greenScale: {
      lightest: colors.greenScale.lightest,
      lighter: colors.greenScale.lighter,
      light: colors.greenScale.light,
      main: colors.greenScale.main,
      dark: colors.greenScale.dark,
      darker: colors.greenScale.darker,
    },
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
      contrastText: colors.common.white,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
      contrastText: colors.common.white,
    },
    tertiary: {
      main: colors.tertiary.main,
      dark: colors.tertiary.dark,
    },
    text: {
      primary: colors.common.black,
      secondary: alpha(colors.common.black, 0.5),
      disabled: alpha(colors.common.black, 0.4),
    },
    divider: alpha(colors.common.black, 0.25),
    action: {
      active: colors.primary.main,
      hover: alpha(colors.primary.main, 0.1),
      hoverOpacity: 0.075,
      selected: alpha(colors.primary.main, 0.2),
      selectedOpacity: 0.15,
      disabled: alpha(colors.common.black, 0.35),
      disabledBackground: alpha(colors.common.black, 0.1),
      disabledOpacity: 0.35,
      focus: alpha(colors.common.black, 0.1),
      focusOpacity: 0.15,
      activatedOpacity: 0.15,
    },
    success: {
      ...colors.success,
      contrastText: colors.common.white,
    },
    error: {
      ...colors.error,
      contrastText: colors.common.white,
    },
    appBackground: {
      light: '#f5f5f5',
      main: '#ffffff',
      backdrop: colors.appBackground.backdrop,
    },
    borderColor: {
      light: colors.borderColor.light,
      main: colors.borderColor.main,
    },
    panelColor: {
      light: colors.common.white,
      main: colors.borderColor.main,
    },
    publiekepartner: publiekePartnerPalette,
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: base.spacing(1),
        },
        h1: {
          fontSize: `clamp(
          ${base.typography.pxToRem(22)},
          ${app.scaleFactor.large},
          ${base.typography.pxToRem(32)}
          )`,
          fontWeight: 700,
          lineHeight: '38px',
        },
        h2: {
          fontSize: `clamp(
          ${base.typography.pxToRem(20)},
          ${app.scaleFactor.large},
          ${base.typography.pxToRem(24)}
          )`,
          fontWeight: 700,
        },
        h3: {
          fontSize: `clamp(
          ${base.typography.pxToRem(16)},
          ${app.scaleFactor.large},
          ${base.typography.pxToRem(18)}
          )`,
          fontWeight: 700,
        },
        h4: {
          fontSize: `clamp(
            ${base.typography.pxToRem(14)},
            ${app.scaleFactor.large},
            ${base.typography.pxToRem(16)}
          )`,
          fontWeight: 700,
        },
        h5: {
          fontSize: `clamp(
            ${base.typography.pxToRem(14)},
            ${app.scaleFactor.large},
            ${base.typography.pxToRem(16)}
          )`,
          fontWeight: 700,
        },
        h6: {
          fontSize: `clamp(
            ${base.typography.pxToRem(12)}, 
            ${app.scaleFactor.large},
            ${base.typography.pxToRem(14)}
          )`,
        },
        subtitle1: {
          fontSize: `clamp(
            ${base.typography.pxToRem(14)}, 
            ${app.scaleFactor.default}, 
            ${base.typography.pxToRem(16)}
          )`,
        },
        subtitle2: {
          fontSize: `clamp(
            ${base.typography.pxToRem(14)}, 
            ${app.scaleFactor.default}, 
            ${base.typography.pxToRem(18)}
          )`,
        },
        body1: {
          fontSize: `clamp(
            ${base.typography.pxToRem(12)},
            ${app.scaleFactor.default}, 
            ${base.typography.pxToRem(14)}
          )`,
        },
        body2: {
          fontSize: `clamp(
            ${base.typography.pxToRem(14)}, 
            ${app.scaleFactor.default}, 
            ${base.typography.pxToRem(16)}
          )`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: colors.common.black,
          backgroundColor: colors.appBackground.light,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderRadius: app.input.borderRadius,
          },
          '&.Mui-focused': {
            'fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colors.grayScale.dark,
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: colors.common.black,
          },
        },
      },
    },
    MuiButton: buttonStyles,
    MuiCard: cardStyles,
    MuiDialog: dialog,
    MuiDialogTitle: dialogTitle,
    MuiIconButton: iconButtonStyles,
    MuiRadio: {
      styleOverrides: {
        root: {
          fontSize: rem(16),
          color: colors.common.black,
          [`&.${radioClasses.checked}`]: {
            color: colors.secondary.main,
          },
          '&:hover': {
            backgroundColor: alpha(colors.secondary.light, 0.075),
          },
        },
      },
    },
    MuiLink: linkStyles,
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Open Sans',
        },
      },
    },
  },
})
