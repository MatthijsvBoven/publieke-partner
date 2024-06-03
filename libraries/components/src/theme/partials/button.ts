import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { app } from '../settings'
import { rem } from 'polished'
import { colors } from '../colors'

interface MuiButton {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton']
  variants?: ComponentsVariants['MuiButton']
}

const secondaryButtonStyles = {
  backgroundColor: colors.common.white,
  color: colors.textShades['200'],
}

export const button: MuiButton = {
  styleOverrides: {
    root: {
      padding: `${app.spacing(2)} ${app.spacing(4)}`,
      height: app.button.height.medium,
      fontSize: rem(15),
      textTransform: 'none',
      borderRadius: app.button.height.medium,
      boxShadow: 'none',
      ':hover': {
        boxShadow: 'none',
      },
    },
    containedSizeSmall: {
      height: app.button.height.small,
      fontSize: rem(14),
    },
    containedSizeLarge: {
      height: app.button.height.large,
      fontSize: rem(16),
    },
    containedSecondary: {
      ...secondaryButtonStyles,
      ':hover': {
        backgroundColor: colors.shades['100'],
      },
      '&:active': {
        backgroundColor: colors.shades['200'],
      },
      ':disabled': {
        backgroundColor: colors.neutral['50'],
        color: colors.textShades['100'],
      },
    },
    outlinedSecondary: {
      ...secondaryButtonStyles,
      borderColor: colors.textShades['200'],
      ':hover': {
        backgroundColor: colors.shades['100'],
        borderColor: colors.textShades['200'],
      },
      '&:active': {
        backgroundColor: colors.shades['200'],
        borderColor: colors.textShades['200'],
      },
      ':disabled': {
        backgroundColor: colors.neutral['50'],
        borderColor: colors.textShades['100'],
        color: colors.textShades['100'],
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: colors.primary['300'],
      },
      '&:active': {
        backgroundColor: colors.primary['400'],
      },
    },
    text: {
      color: colors.textShades['500'],
      textDecoration: 'underline',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultProps: {
    disableRipple: true,
  },
}
