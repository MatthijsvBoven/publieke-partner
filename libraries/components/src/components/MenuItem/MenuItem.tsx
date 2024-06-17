import { Button, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

const buttonStyles = {
  textTransform: 'none',
  fontSize: '15px',
  height: '100%',
  textDecoration: 'none',
  '&:hover': {
    color: 'blue',
  },
}

export type MenuItemProps = {
  href?: string
  intlDescriptor: string
  selected: boolean
  index?: number
}

export const MenuItem = ({ href, intlDescriptor, selected, index }: MenuItemProps) => {
  const { formatMessage } = useIntl()

  return href ? (
    <Button
      sx={{ color: selected ? 'blue' : 'black', ...buttonStyles }}
      href={href}
      data-testid={`MenuItemWithHref${index}`}
    >
      {formatMessage({ id: intlDescriptor })}
    </Button>
  ) : (
    <Typography sx={{ pt: 1, fontSize: '15px' }} data-testid={`MenuItemWithoutHref${index}`}>
      {formatMessage({ id: intlDescriptor })}
    </Typography>
  )
}
