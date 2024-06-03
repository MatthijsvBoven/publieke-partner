import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { app, colors } from '../settings'
import { rem } from 'polished'

interface MuiDialog {
  defaultProps?: ComponentsProps['MuiDialog']
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialog']
  variants?: ComponentsVariants['MuiDialog']
}

export const dialog: MuiDialog = {
  styleOverrides: {
    container: {
      alignItems: 'flex-end',
      '@media (min-width: 900px)': {
        alignItems: 'center',
      },
    },
    paper: {
      margin: '32px 0 0 0',
      borderRadius: app.baseBorderRadius,
      boxShadow: 'none',
      flex: '1 0 70%',
      width: '100%',
      '@media (min-width: 900px)': {
        margin: 4,
        width: '856px',
      },
    },
  },
}

interface MuiDialogTitle {
  defaultProps?: ComponentsProps['MuiDialogTitle']
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialogTitle']
  variants?: ComponentsVariants['MuiDialogTitle']
}

export const dialogTitle: MuiDialogTitle = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: rem(18),
      fontWeight: 700,
      lineHeight: rem(28),
      borderBottom: `2px solid ${colors.publiekepartner.neutral['50']}`,
      '& button': {
        color: colors.publiekepartner.textShades['200'],
      },
    },
  },
}
