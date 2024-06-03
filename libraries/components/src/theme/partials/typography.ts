import { palette } from './palette'
import { rem } from 'polished'

export const fontSize = {
  body: {
    xs: rem(12),
    sm: rem(14),
    md: rem(15),
    lg: rem(16),
  },
  heading: {
    h1: rem(28),
    h2: rem(24),
    h3: rem(22),
    h4: rem(18),
  },
}

export const typography = {
  allVariants: {
    letterSpacing: 'unset',
    fontSize: 'unset',
    lineHeight: 1.4,
  },
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
  fontSize: 16,
  fontWeight: 400,
  color: palette?.text?.primary,
  h1: {
    fontSize: fontSize.heading.h1,
    fontWeight: 700,
  },
  h2: {
    fontSize: fontSize.heading.h2,
    fontWeight: 700,
  },
  h3: {
    fontSize: fontSize.heading.h3,
    fontWeight: 700,
  },
  h4: {
    fontSize: fontSize.heading.h4,
    fontWeight: 700,
  },
  button: {
    fontWeight: 600,
  },
}

export const muiTypography = {}
