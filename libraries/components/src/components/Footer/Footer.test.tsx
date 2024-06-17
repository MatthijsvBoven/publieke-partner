import { describe, test, expect } from 'bun:test'
import { Footer } from './Footer'
import type { MenuItemProps } from '../MenuItem/MenuItem'
import { FooterSocialsProps } from './FooterSocials'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { render, screen } from '../../../test-utils'

const legalMenuItems: MenuItemProps[] = [
  {
    intlDescriptor: 'footer.legal.copyright',
    selected: false,
  },
  {
    intlDescriptor: 'footer.legal.powered-by',
    selected: false,
  },
  {
    href: '/algemene-voorwaarden',
    intlDescriptor: 'footer.legal.terms-and-conditions',
    selected: false,
  },
  {
    href: '/privacy-policy',
    intlDescriptor: 'footer.legal.privacy-policy',
    selected: true,
  },
]

const menuLinks: Array<MenuItemProps> = [
  {
    href: '/',
    intlDescriptor: 'header.navigation.home',
    selected: true,
  },
  {
    href: '/zzp-opdrachten',
    intlDescriptor: 'header.navigation.assignments',
    selected: false,
  },
  {
    href: '/organisaties',
    intlDescriptor: 'header.navigation.organisations',
    selected: false,
  },
  {
    href: '/hoe-werken-wij',
    intlDescriptor: 'header.navigation.how-we-work',
    selected: false,
  },
  {
    href: '/over-ons',
    intlDescriptor: 'header.navigation.about-us',
    selected: false,
  },
  {
    href: '/contact',
    intlDescriptor: 'header.navigation.contact',
    selected: false,
  },
]

const footerSocials: FooterSocialsProps = {
  items: [
    {
      name: 'twitter',
      url: 'https://twitter.com/PubliekePartner',
      icon: Twitter,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/101129585',
      icon: LinkedIn,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/de.publieke.partner',
      icon: Instagram,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=61555646075718',
      icon: Facebook,
    },
  ],
}

describe('Footer tests', () => {
  test('renders', () => {
    render(<Footer legalMenuItems={legalMenuItems} menuItems={menuLinks} footerSocials={footerSocials} />)
    const menuItem = screen.getByTestId('MenuItemWithHref0')
    expect(menuItem.innerText).toEqual('Home')
  })
})
