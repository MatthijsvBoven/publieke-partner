import { Box, IconButton, Menu, MenuItem as MuiMenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import type { MenuItemProps } from '../MenuItem/MenuItem.tsx'
import { useIntl } from 'react-intl'
import { MenuItem } from '../MenuItem/MenuItem.tsx'
import type { MouseEvent } from 'react'

type HeaderSubMenuProps = {
  openSubMenu: (event: MouseEvent<HTMLElement>) => void
  closeSubMenu: () => void
  menuItems: Array<MenuItemProps>
  anchorElNav: HTMLElement | null
}

export const HeaderSubMenu = ({ openSubMenu, closeSubMenu, menuItems, anchorElNav }: HeaderSubMenuProps) => {
  const { formatMessage } = useIntl()

  return (
    <Box sx={{ display: 'inline-flex' }}>
      <IconButton
        size="large"
        aria-label={formatMessage({ id: 'header.menu.aria-label' })}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openSubMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={!!anchorElNav}
        onClose={closeSubMenu}
        sx={{
          display: 'block',
        }}
      >
        {menuItems.map((menuItem, index) => (
          <MuiMenuItem key={index} onClick={closeSubMenu}>
            <MenuItem {...menuItem} index={index} />
          </MuiMenuItem>
        ))}
      </Menu>
    </Box>
  )
}
