import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import type { HeaderMenuItemProps } from './HeaderMenuItem.tsx'
import { useIntl } from 'react-intl'
import { HeaderMenuItem } from './HeaderMenuItem.tsx'
import type { MouseEvent } from 'react'

type HeaderSubMenuProps = {
  openSubMenu: (event: MouseEvent<HTMLElement>) => void
  closeSubMenu: () => void
  menuItems: Array<HeaderMenuItemProps>
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
          <MenuItem key={index} onClick={closeSubMenu}>
            <HeaderMenuItem {...menuItem} key={index} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
