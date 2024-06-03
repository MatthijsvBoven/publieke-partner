import { colors } from '../colors'
import type { PaletteOptions } from '@mui/material'
import { alpha } from '@mui/material'

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
    shades?: {
      '50'?: string
      '100'?: string
      '200'?: string
      '300'?: string
      '400'?: string
    }
  }
}
export const palette: PaletteOptions = {
  brand: {
    main: colors.brand['200'],
    '50': colors.brand['50'],
    '100': colors.brand['100'],
    '200': colors.brand['200'],
    '300': colors.brand['300'],
    '400': colors.brand['400'],
  },
  common: {
    white: colors.common.white,
    black: colors.common.black,
  },
  primary: {
    main: colors.primary['200'],
    '50': colors.primary['50'],
    '100': colors.primary['100'],
    '200': colors.primary['200'],
    '300': colors.primary['300'],
    '400': colors.primary['400'],
    contrastText: colors.textShades['50'],
  },
  secondary: {
    main: colors.secondary['200'],
    '50': colors.secondary['50'],
    '100': colors.secondary['100'],
    '200': colors.secondary['200'],
    '300': colors.secondary['300'],
    '400': colors.secondary['400'],
    contrastText: colors.textShades['200'],
  },
  neutral: {
    main: colors.neutral['200'],
    '50': colors.neutral['50'],
    '100': colors.neutral['100'],
    '200': colors.neutral['200'],
    '300': colors.neutral['300'],
    '400': colors.neutral['400'],
  },
  text: {
    primary: colors.textShades['200'],
    secondary: colors.textShades['100'],
    disabled: colors.textShades['100'],
  },
  textScale: {
    '50': colors.textShades['50'],
    '100': colors.textShades['100'],
    '200': colors.textShades['200'],
    '300': colors.textShades['300'],
    '400': colors.textShades['400'],
    '500': colors.textShades['500'],
  },
  divider: colors.neutral['50'],
  action: {
    active: colors.textShades['500'],
    hover: alpha(colors.textShades['500'], 0.1),
    disabled: colors.textShades['100'],
  },
  shades: {
    '50': colors.shades['50'],
    '100': colors.shades['100'],
    '200': colors.shades['200'],
    '300': colors.shades['300'],
    '400': colors.shades['400'],
  },
  warning: {
    main: colors.warning['50'],
  },
}
