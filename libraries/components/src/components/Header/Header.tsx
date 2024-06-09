import { AppBar, Box, Toolbar, Container, useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import type { HeaderMenuItemProps } from './HeaderMenuItem.tsx'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
import { Logo } from '../Logo/Logo.tsx'
import { HideOnScroll } from './HideOnScroll.tsx'
import { HeaderSubMenu } from './HeaderSubMenu.tsx'
import { HeaderMenuItem } from './HeaderMenuItem.tsx'
import { MyAccount } from './MyAccount.tsx'

type HeaderProps = {
  menuItems: Array<HeaderMenuItemProps>
  image: string | StaticRequire | StaticImageData
  myAccountHref?: string
}

export const Header = ({ menuItems, image, myAccountHref }: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isLargeUp = useMediaQuery(theme.breakpoints.up('lg'))

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {!isLargeUp && (
              <HeaderSubMenu
                openSubMenu={handleOpenNavMenu}
                closeSubMenu={handleCloseNavMenu}
                menuItems={menuItems}
                anchorElNav={anchorElNav}
              />
            )}
            <Box sx={{ mt: 1, mb: 1, ml: { md: -6 } }}>
              <Logo image={image} />
            </Box>
            {isLargeUp && (
              <Box sx={{ ml: { md: -3 } }}>
                {menuItems.map((menuItem, index) => (
                  <HeaderMenuItem {...menuItem} key={index} />
                ))}
              </Box>
            )}
            <MyAccount href={myAccountHref} />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
