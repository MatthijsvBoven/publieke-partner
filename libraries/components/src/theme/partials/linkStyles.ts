import { colors } from '../settings'
import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material'
import { rem } from 'polished'

interface MuiLink {
  defaultProps?: ComponentsProps['MuiLink']
  styleOverrides?: ComponentsOverrides<Theme>['MuiLink']
  variants?: ComponentsVariants['MuiLink']
}

const linkStyles: MuiLink = {
  variants: [
    {
      props: { variant: 'primaryLink' },
      style: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: colors.primary.main,
        fontSize: rem(16),
        textTransform: 'none',
        transition: 'color .3s ease',
        '&:hover': {
          color: colors.primary.dark,
          textDecoration: 'underline',
        },
      },
    },
    {
      props: { variant: 'secondaryLink' },
      style: {
        cursor: 'pointer',
        color: colors.common.black,
        fontSize: rem(16),
        textTransform: 'none',
        textDecorationColor: colors.common.black,
        transition: 'color .3s ease',
        '&:hover': {
          color: colors.primary.main,
        },
      },
    },
  ],
}

export default linkStyles
