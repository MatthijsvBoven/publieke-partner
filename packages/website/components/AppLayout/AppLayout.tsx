import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { footerMenuItems } from '../../mockdata/FooterMenuItems'
import { menuLinks } from '../../mockdata/MenuLinks'
import { footerSocials } from '../../mockdata/FooterSocials'
import { useRouter } from 'next/router'
import { Header, Footer } from '@publiekepartner/components'
import PubliekePartnerLogo from '../../public/PubliekePartnerLogo.webp'
import { StaticImageData } from 'next/image'

export const AppLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  menuLinks.map((menuItem) => {
    menuItem.selected = menuItem.href === router.asPath
  })

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header menuItems={menuLinks} image={PubliekePartnerLogo as StaticImageData} />
      <Box sx={{ flex: 1, bgcolor: 'lightgrey' }}>{children}</Box>
      <Footer legalMenuItems={footerMenuItems} menuItems={menuLinks} footerSocials={footerSocials} />
    </Box>
  )
}
