import { Box, Container, Stack, Divider, useTheme, useMediaQuery } from '@mui/material'
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem'

interface FooterLegalProps {
  menuItems: Array<MenuItemProps>
}

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '100px',
}

const stackStyles = {
  ml: 'auto',
  mr: 'auto',
  justifyContent: 'center',
  flex: '2 0 0',
  textAlign: 'center',
}

export const FooterLegal = ({ menuItems }: FooterLegalProps) => {
  const theme = useTheme()
  const isSmallUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={boxStyles}>
          <Stack
            direction={isSmallUp ? 'row' : 'column'}
            spacing={isSmallUp ? 2 : 0}
            divider={
              isSmallUp && (
                <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'grayScale.main' }} flexItem />
              )
            }
            sx={stackStyles}
          >
            {menuItems.map((menuItem, index) => (
              <Box key={index}>
                <MenuItem {...menuItem} index={index} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
