import { Button } from '@mui/material'
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

export type HeaderMenuItemProps = {
  href: string
  intlDescriptor: string
  selected: boolean
  index?: number
}

export const HeaderMenuItem = ({ href, intlDescriptor, selected, index }: HeaderMenuItemProps) => {
  const { formatMessage } = useIntl()

  return (
    <Button sx={{ color: selected ? 'blue' : 'black', ...buttonStyles }} href={href} key={index}>
      {formatMessage({ id: intlDescriptor })}
    </Button>
  )
}
