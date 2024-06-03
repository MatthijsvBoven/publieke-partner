import { Box } from '@mui/material'
import { Logo } from '../Logo/Logo.tsx'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'

type HeaderProps = {
  logoImage: string | StaticRequire | StaticImageData
}

export const Header = ({ logoImage }: HeaderProps) => {
  const { formatMessage } = useIntl()

  return (
    <Box>
      <Link href={'/'}>{formatMessage({ id: 'header.navigation.home' })}</Link>
      <Link href={'/zzp-opdrachten'}>{formatMessage({ id: 'header.navigation.assignments' })}</Link>
      <Link href={'/organisaties'}>{formatMessage({ id: 'header.navigation.organisations' })}</Link>
      <Link href={'/hoe-werken-wij'}>{formatMessage({ id: 'header.navigation.how-we-work' })}</Link>
      <Link href={'/over-ons'}>{formatMessage({ id: 'header.navigation.about-us' })}</Link>
      <Link href={'/contact'}>{formatMessage({ id: 'header.navigation.contact' })}</Link>
      <Logo image={logoImage} />
    </Box>
  )
}
