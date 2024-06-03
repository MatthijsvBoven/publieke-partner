import { createTheme } from '@mui/material'
import { typography } from './partials/typography'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import { palette } from './partials/palette'
import { button } from './partials/button'
import { dialog, dialogTitle } from './partials/dialog'
import { iconButton } from './partials/iconButton'

export { ThemeProvider } from './ThemeProvider'
export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: button,
    MuiDialog: dialog,
    MuiDialogTitle: dialogTitle,
    MuiIconButton: iconButton,
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})
