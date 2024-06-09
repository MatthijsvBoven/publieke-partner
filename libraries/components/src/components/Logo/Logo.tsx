import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'
import { Tooltip, useMediaQuery, useTheme } from '@mui/material'

type LogoProps = {
  image: string | StaticRequire | StaticImageData
  alt?: string
  href?: string
  hoverText?: string
}

export const Logo = ({
  image,
  href = '/',
  alt = 'ZZP opdrachten - de Publieke Partner Logo',
  hoverText = 'Publieke Partner Logo',
}: LogoProps) => {
  const theme = useTheme()
  const isSmallUp = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Link href={href}>
      <Tooltip title={hoverText}>
        <Image src={image} alt={alt} width={isSmallUp ? 230 : 400} height={isSmallUp ? 60 : 90} priority />
      </Tooltip>
    </Link>
  )
}
