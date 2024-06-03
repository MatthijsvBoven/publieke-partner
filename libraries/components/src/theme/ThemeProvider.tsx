import { CssBaseline, ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material'
import { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
  theme: object
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </StyledEngineProvider>
)
