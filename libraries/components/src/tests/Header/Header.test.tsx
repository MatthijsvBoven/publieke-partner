import { Header } from '../../components/Header/Header'
import type { MenuItemProps } from '../../components/MenuItem/MenuItem'
import { render, screen } from '../test-utils'
import { test, describe, expect, beforeEach } from 'bun:test'
import { cleanup } from '@testing-library/react'

const menuLinks: Array<MenuItemProps> = [
  {
    href: '/',
    intlDescriptor: 'header.navigation.home',
    selected: true,
  },
]

const src = 'https://en.wikipedia.org/wiki/File:SMPTE_Color_Bars.svg'

describe('Header', () => {
  beforeEach(() => cleanup())
  test('renders correctly', () => {
    render(<Header menuItems={menuLinks} image={src} />)
    expect(screen.getByTestId('MenuIcon')).toBeDefined()
    expect(screen.getByTestId('MenuItemWithHref0').innerText).toEqual('Home')
    expect(screen.getByTestId('MenuItemWithHref0').href).toEqual(menuLinks[0].href)
    expect(screen.getByTestId('LogoLink').href).toEqual('/')
    expect(screen.getByTestId('Logo').alt).toEqual('ZZP opdrachten - de Publieke Partner Logo')
    expect(screen.getByTestId('Logo').src).toEqual(src)
    expect(screen.getByTestId('MyAccountIcon').href).toEqual('/my-account')
    expect(screen.getByTestId('PersonOutlinedIcon')).toBeDefined()
    expect(screen.getByTestId('MyAccountText').innerText).toEqual('Account')
  })
})
