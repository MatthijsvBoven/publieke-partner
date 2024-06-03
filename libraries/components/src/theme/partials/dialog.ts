import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'
import { app } from '../settings'
import { colors } from '../colors'

interface MuiDialog {
  defaultProps?: ComponentsProps['MuiDialog']
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialog']
  variants?: ComponentsVariants['MuiDialog']
}

export const dialog: MuiDialog = {
  styleOverrides: {
    paper: {
      borderRadius: app.baseBorderRadius,
      boxShadow: 'none',
      flex: '1 0 70%',
      minWidth: '300px',
      maxWidth: '856px',
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
      borderBottom: `4px solid ${colors.neutral['50']}`,
    },
  },
}
