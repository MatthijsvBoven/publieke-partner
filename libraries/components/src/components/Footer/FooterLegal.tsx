import { Box, Container, Stack, Divider, useTheme, useMediaQuery } from '@mui/material'
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem'

interface FooterLegalProps {
  menuItems: Array<MenuItemProps>
}

export const FooterLegal = ({ menuItems }: FooterLegalProps) => {
  const theme = useTheme()
  const isSmallUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box sx={{ fontSize: '14px' }}>
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" minHeight="100px">
          <Stack
            direction={isSmallUp ? 'row' : 'column'}
            spacing={isSmallUp ? 2 : 0}
            divider={
              isSmallUp && (
                <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'grayScale.main' }} flexItem />
              )
            }
            textAlign="center"
            flex="2 0 0"
            fontSize={{ xs: '12px', sm: '14px' }}
            sx={{ ml: 'auto', mr: 'auto' }}
            justifyContent="center"
          >
            {menuItems.map((menuItem) => (
              <MenuItem {...menuItem} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
