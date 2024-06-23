import { AppBar, Box, Toolbar, Container, useTheme, useMediaQuery, Divider } from '@mui/material'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import type { MenuItemProps } from '../MenuItem/MenuItem.tsx'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
import { Logo } from '../Logo/Logo.tsx'
import { HideOnScroll } from './HideOnScroll.tsx'
import { HeaderSubMenu } from './HeaderSubMenu.tsx'
import { MenuItem } from '../MenuItem/MenuItem.tsx'
import { MyAccount } from './MyAccount.tsx'
import { Newsletter } from '../Newsletter/Newsletter'

type HeaderProps = {
  menuItems: Array<MenuItemProps>
  image: string | StaticRequire | StaticImageData
  myAccountHref?: string
}

export const Header = ({ menuItems, image, myAccountHref }: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isLargeUp = useMediaQuery(theme.breakpoints.up('lg'))
  const isLargeDown = useMediaQuery(theme.breakpoints.down('lg'))

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <HideOnScroll>
      <AppBar sx={{ bgcolor: 'common.white' }} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {isLargeDown && (
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
              <Box sx={{ ml: { md: -3 }, display: 'flex', gap: 5 }}>
                {menuItems.map((menuItem, index) => (
                  <MenuItem {...menuItem} index={index} key={index} />
                ))}
              </Box>
            )}
            <MyAccount href={myAccountHref} />
          </Toolbar>
          <Divider orientation="horizontal" sx={{ width: '100%' }} />
          <Newsletter />
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
