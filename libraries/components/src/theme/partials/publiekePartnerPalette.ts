import { alpha } from '@mui/material'
import type { PaletteOptions } from '@mui/material'
import { colors } from '../settings'

interface PaletteKeys {
  main?: string
  '50'?: string
  '100'?: string
  '200'?: string
  '300'?: string
  '400'?: string
}

declare module '@mui/material/styles' {
  export interface PaletteOptions {
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

export const publiekePartnerPalette: PaletteOptions = {
  brand: {
    main: colors.publiekepartner.brand['200'],
    '50': colors.publiekepartner.brand['50'],
    '100': colors.publiekepartner.brand['100'],
    '200': colors.publiekepartner.brand['200'],
    '300': colors.publiekepartner.brand['300'],
    '400': colors.publiekepartner.brand['400'],
  },
  common: {
    white: colors.publiekepartner.common.white,
    black: colors.publiekepartner.common.black,
  },
  primary: {
    main: colors.publiekepartner.primary['200'],
    '50': colors.publiekepartner.primary['50'],
    '100': colors.publiekepartner.primary['100'],
    '200': colors.publiekepartner.primary['200'],
    '300': colors.publiekepartner.primary['300'],
    '400': colors.publiekepartner.primary['400'],
    contrastText: colors.publiekepartner.textShades['50'],
  },
  secondary: {
    main: colors.publiekepartner.secondary['200'],
    '50': colors.publiekepartner.secondary['50'],
    '100': colors.publiekepartner.secondary['100'],
    '200': colors.publiekepartner.secondary['200'],
    '300': colors.publiekepartner.secondary['300'],
    '400': colors.publiekepartner.secondary['400'],
    contrastText: colors.publiekepartner.textShades['200'],
  },
  neutral: {
    main: colors.publiekepartner.neutral['200'],
    '50': colors.publiekepartner.neutral['50'],
    '100': colors.publiekepartner.neutral['100'],
    '200': colors.publiekepartner.neutral['200'],
    '300': colors.publiekepartner.neutral['300'],
    '400': colors.publiekepartner.neutral['400'],
  },
  text: {
    primary: colors.publiekepartner.textShades['200'],
    secondary: colors.publiekepartner.textShades['100'],
    disabled: colors.publiekepartner.textShades['100'],
  },
  textScale: {
    '50': colors.publiekepartner.textShades['50'],
    '100': colors.publiekepartner.textShades['100'],
    '200': colors.publiekepartner.textShades['200'],
    '300': colors.publiekepartner.textShades['300'],
    '400': colors.publiekepartner.textShades['400'],
    '500': colors.publiekepartner.textShades['500'],
  },
  shades: {
    '50': colors.publiekepartner.shades['50'],
    '100': colors.publiekepartner.shades['100'],
    '200': colors.publiekepartner.shades['200'],
    '300': colors.publiekepartner.shades['300'],
    '400': colors.publiekepartner.shades['400'],
  },
  divider: colors.publiekepartner.neutral['50'],
  action: {
    active: colors.publiekepartner.textShades['500'],
    hover: alpha(colors.publiekepartner.textShades['500'], 0.1),
    disabled: colors.publiekepartner.textShades['100'],
  },
}
