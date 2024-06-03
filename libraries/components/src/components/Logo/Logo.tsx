import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'

type LogoProps = {
  image: string | StaticRequire | StaticImageData
  width?: number
  height?: number
  alt?: string
  href?: string
}

export const Logo = ({
  image,
  width = 500,
  height = 100,
  href = '/',
  alt = 'ZZP opdrachten - de Publieke Partner Logo',
}: LogoProps) => (
  <Link href={href}>
    <Image src={image} alt={alt} width={width} height={height} priority />
  </Link>
)
