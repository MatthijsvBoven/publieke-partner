import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { PersonOutlined } from '@mui/icons-material'
import { useIntl } from 'react-intl'

const sx = {
  p: 0,
  color: 'black',
  flexDirection: 'column',
  '&:hover': {
    color: 'blue',
  },
}

type MyAccountType = {
  href?: string
  hoverText?: string
}

export const MyAccount = ({ href = '/my-account', hoverText = 'Open account' }: MyAccountType) => {
  const { formatMessage } = useIntl()

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={hoverText}>
        <IconButton href={href} sx={sx}>
          <PersonOutlined />
          <Typography>{formatMessage({ id: 'header.menu.my-account.label' })}</Typography>
        </IconButton>
      </Tooltip>
    </Box>
  )
}
