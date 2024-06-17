import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { theme, ThemeProvider } from './src'
import nlNL from '../../packages/website/intl/nl-NL.json'

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <IntlProvider locale={'nl-NL'} defaultLocale={'nl-NL'} messages={nlNL}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
)

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
