import { Button, ButtonProps, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

const buttonStyles = {
  textTransform: 'none',
  fontSize: { xs: '15px', md: '18px', lg: '22px' },
  height: '100%',
  textDecoration: 'none',
  '&:hover': {
    color: 'blue',
  },
}

export interface MenuItemProps extends ButtonProps {
  href?: string
  intlDescriptor: string
  selected?: boolean
  index?: number
}

export const MenuItem = ({ href, intlDescriptor, selected = false, index }: MenuItemProps) => {
  const { formatMessage } = useIntl()

  return href ? (
    <Button
      sx={{ color: selected ? 'blue' : 'black', ...buttonStyles }}
      href={href}
      data-testid={`MenuItemWithHref${index}`}
      key={index}
    >
      {formatMessage({ id: intlDescriptor })}
    </Button>
  ) : (
    <Typography
      key={index}
      sx={{ pt: 1, fontSize: { xs: '15px', md: '18px', lg: '22px' } }}
      data-testid={`MenuItemWithoutHref${index}`}
    >
      {formatMessage({ id: intlDescriptor })}
    </Typography>
  )
}
