import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { colors } from '../settings'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    projectFrameCard: true
    projectAddFrameCard: true
  }
}

interface MuiCard {
  defaultProps?: ComponentsProps['MuiCard']
  styleOverrides?: ComponentsOverrides<Theme>['MuiCard']
  variants?: ComponentsVariants['MuiCard']
}

export const cardStyles: MuiCard = {
  variants: [
    {
      props: { variant: 'projectFrameCard' },
      style: {
        backfaceVisibility: 'hidden',
        color: colors.publiekepartner.textShades['200'],
        backgroundColor: colors.publiekepartner.neutral['50'],
        borderRadius: 0,
        minHeight: '420px',
        '& .MuiCardContent-root': {
          borderTopStyle: 'solid',
          borderTopColor: colors.publiekepartner.common.white,
        },
      },
    },
    {
      props: { variant: 'projectAddFrameCard' },
      style: {
        minHeight: '420px',
        backfaceVisibility: 'hidden',
        backgroundColor: colors.publiekepartner.common.white,
        borderRadius: 0,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.publiekepartner.neutral['100'],
      },
    },
  ],
}
