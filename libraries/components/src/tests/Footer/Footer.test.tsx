import { Footer } from '../../components/Footer/Footer'
import type { MenuItemProps } from '../../components/MenuItem/MenuItem'
import { FooterSocialsProps } from '../../components/Footer/FooterSocials'
import { Twitter } from '@mui/icons-material'
import { render, screen } from '../test-utils'
import { test, describe, expect, beforeEach } from 'bun:test'
import { cleanup } from '@testing-library/react'

const legalMenuItems: MenuItemProps[] = [
  {
    intlDescriptor: 'footer.legal.copyright',
    selected: false,
  },
  {
    href: '/algemene-voorwaarden',
    intlDescriptor: 'footer.legal.terms-and-conditions',
    selected: true,
  },
]

const menuLinks: Array<MenuItemProps> = [
  {
    href: '/',
    intlDescriptor: 'header.navigation.home',
    selected: true,
  },
]

const footerSocials: FooterSocialsProps = {
  items: [
    {
      name: 'twitter',
      url: 'https://twitter.com/PubliekePartner',
      icon: Twitter,
    },
  ],
}

describe('Footer', () => {
  beforeEach(() => cleanup())
  test('renders correctly', () => {
    render(<Footer legalMenuItems={legalMenuItems} menuItems={menuLinks} footerSocials={footerSocials} />)
    expect(screen.getByTestId('MenuItemWithHref0').innerText).toEqual('Home')
    expect(screen.getByTestId('MenuItemWithHref0').href).toEqual(menuLinks[0].href)
    expect(screen.getByTestId('MenuItemWithoutHref0').innerText).toEqual('Copyright © 2024 de Publieke Partner')
    expect(screen.getByTestId('MenuItemWithoutHref0').href).toBeUndefined()
    expect(screen.getByTestId('MenuItemWithHref1').innerText).toEqual('Algemene voorwaarden')
    expect(screen.getByTestId('MenuItemWithHref1').href).toEqual(legalMenuItems[1].href)
    const footerSocial = screen.getByTestId('FooterSocialsLink0')
    expect(footerSocial.href).toEqual(footerSocials.items[0].url)
    expect(footerSocial.rel).toEqual('noopener noreferrer')
    expect(footerSocial.target).toEqual('_blank')
    expect(screen.getByTestId('TwitterIcon')).toBeDefined()
  })
})
