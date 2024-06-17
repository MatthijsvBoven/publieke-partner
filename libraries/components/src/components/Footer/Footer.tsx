import { Box, Divider, Stack, useMediaQuery, useTheme } from '@mui/material'
import { FooterLegal } from './FooterLegal'
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem'
import { FooterSocials, FooterSocialsProps } from './FooterSocials'

interface FooterProps {
  legalMenuItems: Array<MenuItemProps>
  menuItems: Array<MenuItemProps>
  footerSocials: FooterSocialsProps
}

export const Footer = ({ menuItems, legalMenuItems, footerSocials }: FooterProps) => {
  const theme = useTheme()
  const isSmallUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Divider orientation="horizontal" variant="middle" sx={{ borderColor: 'grayScale.main' }} />
      <Stack
        direction={isSmallUp ? 'row' : 'column'}
        spacing={isSmallUp ? 2 : 0}
        textAlign="center"
        flex="2 0 0"
        fontSize={{ xs: '12px', sm: '14px' }}
        sx={{ ml: 'auto', mr: 'auto', alignItems: 'center' }}
        justifyContent="center"
      >
        {menuItems.map((menuItem, index) => (
          <Box key={index}>
            <MenuItem {...menuItem} index={index} />
          </Box>
        ))}
        <FooterSocials {...footerSocials} />
      </Stack>
      <Divider orientation="horizontal" variant="middle" sx={{ borderColor: 'grayScale.main' }} />
      <FooterLegal menuItems={legalMenuItems} />
    </Box>
  )
}
