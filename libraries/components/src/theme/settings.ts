import { publiekePartnerColors } from './partials/publiekePartnerColors.ts'

export const colors = {
  common: {
    black: '#262b2e',
    white: '#ffffff',
    gray: '#cccccc',
    darkGray: '#999999',
  },
  grayScale: {
    lightest: '#f5f5f5',
    lighter: '#f0f0f0',
    light: '#e6e6e6',
    main: '#9e9fa0',
    dark: '#7e7f80',
    darker: '#3d3f40',
    darkest: '#202020',
  },
  blueScale: {
    lightest: '#f3f7fa',
    lighter: '#d9e5ef',
    light: '#bdd5eb',
  },
  greenScale: {
    lightest: '#e2f6ee',
    lighter: '#baebd6',
    light: '#69d3a6',
    main: '#44c890',
    dark: '#6DC593',
    darker: '#36a073',
  },
  primary: {
    light: '#4dabf5',
    main: '#2196f3',
    dark: '#1a78c2',
  },
  secondary: {
    light: '#69d3a6',
    main: '#44c890',
    dark: '#36a073',
  },
  tertiary: {
    main: '#38393a',
    dark: '#252627',
  },
  error: {
    light: '#dd345d',
    main: '#d40134',
    dark: '#aa012a',
  },
  warning: {
    lighter: '#fff9f2',
    light: '#ffad33',
    main: '#ff9800',
    dark: '#ff8a00',
    darker: '#cc7a00',
  },
  info: {
    light: '#4dabf5',
    main: '#2196f3',
    dark: '#1a78c2',
  },
  success: {
    light: '#69d3a6',
    main: '#44c890',
    dark: '#36a073',
    darker: '#2b805c',
  },
  appBackground: {
    light: '#f5f5f5',
    main: '#ffffff',
    backdrop: '#262629E5',
  },
  borderColor: {
    light: '#f0f0f0',
    main: '#e6e6e6',
  },
  v1: {
    black: '#38393a',
    gray: {
      lightest: '#f9f9f9',
      lighter: '#f0f0f0',
      light: '#cccccc',
      main: '#8d8d8d',
      dark: '#6d6d6d',
    },
    green: {
      lightest: '#F3FFF8',
    },
    info: {
      dark: '#0093dc',
      main: '#2E97F9',
    },
    error: {
      main: '#D40032',
    },
  },
  publiekepartner: publiekePartnerColors,
}

export const app = {
  scaleFactor: {
    default: '1vw + 0.5rem',
    large: '2.5vw + 0.5rem',
  },
  input: {
    borderRadius: '3px',
  },
  baseBorderRadius: '8px',
  spacing: (factor: number) => `${0.5 * factor}rem`,
  button: {
    height: {
      small: '36px',
      medium: '44px',
      large: '52px',
    },
  },
}
