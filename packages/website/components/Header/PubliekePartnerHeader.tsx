import { Header } from '@publiekepartner/components'
import PubliekePartnerLogo from '../../public/PubliekePartnerLogo.webp'
import { headerMenuItems } from './HeaderMenuItems.ts'
import { useRouter } from 'next/router'

export const PubliekePartnerHeader = () => {
  const router = useRouter()

  headerMenuItems.map((menuItem) => {
    menuItem.selected = menuItem.href === router.asPath
  })

  return <Header menuItems={headerMenuItems} image={PubliekePartnerLogo} />
}
