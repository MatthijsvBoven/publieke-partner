import { Container } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { footerMenuItems } from './FooterMenuItems'
import { menuLinks } from './MenuLinks'
import { footerSocials } from './FooterSocials'
import { useRouter } from 'next/router'
import { Header, Footer } from '@publiekepartner/components'
import PubliekePartnerLogo from '../../public/PubliekePartnerLogo.webp'

export const AppLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  menuLinks.map((menuItem) => {
    menuItem.selected = menuItem.href === router.asPath
  })

  return (
    <Container>
      <Header menuItems={menuLinks} image={PubliekePartnerLogo} />
      {children}
      <Footer legalMenuItems={footerMenuItems} menuItems={menuLinks} footerSocials={footerSocials} />
    </Container>
  )
}
