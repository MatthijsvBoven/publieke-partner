import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { colors } from '../colors'

interface MuiIconButton {
  defaultProps?: ComponentsProps['MuiIconButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton']
  variants?: ComponentsVariants['MuiIconButton']
}
export const iconButton: MuiIconButton = {
  styleOverrides: {
    root: {
      color: colors.textShades['200'],
      ':hover': {
        backgroundColor: 'transparent',
        color: colors.brand['200'],
      },
      ':active': {
        color: colors.common.black,
      },
    },
  },
  defaultProps: {
    disableRipple: true,
  },
}
