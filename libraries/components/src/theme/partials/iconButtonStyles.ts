import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { colors } from '../settings'

interface MuiIconButton {
  defaultProps?: ComponentsProps['MuiIconButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton']
  variants?: ComponentsVariants['MuiIconButton']
}

export const iconButtonStyles: MuiIconButton = {
  defaultProps: {
    disableRipple: true,
  },
  variants: [
    {
      props: { name: 'publiekepartner' },
      style: {
        color: colors.publiekepartner.textShades['200'],
        '&:hover': {
          color: colors.publiekepartner.brand['200'],
        },
      },
    },
  ],
}
