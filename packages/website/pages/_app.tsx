import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'
import createEmotionCache from '../utils/createEmotionCache.ts'
import { Poppins } from 'next/font/google'
import nlNL from '../intl/nl-NL.json'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { ThemeProvider, theme } from '@publiekepartner/components'
import { DefaultSeo } from 'next-seo'
import { AppLayout } from '../components/AppLayout/AppLayout.tsx'

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

const _App = ({ emotionCache = clientSideEmotionCache, Component, pageProps }: MyAppProps) => {
  const { locale, defaultLocale } = useRouter()

  return (
    <CacheProvider value={emotionCache}>
      <IntlProvider locale={locale as string} defaultLocale={defaultLocale} messages={nlNL}>
        <div className={poppins.className}>
          <ThemeProvider theme={theme}>
            <AppLayout>
              <DefaultSeo titleTemplate="%s - de Publieke Partner" />
              <Component {...pageProps} />
            </AppLayout>
          </ThemeProvider>
        </div>
      </IntlProvider>
    </CacheProvider>
  )
}

export default _App
