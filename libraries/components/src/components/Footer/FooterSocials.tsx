import { Box, IconButton } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import Link from 'next/link'

interface FooterSocialItemProps {
  name: string
  url: string
  icon: SvgIconComponent
}

export interface FooterSocialsProps {
  items: Array<FooterSocialItemProps>
}

const footerSocialsStyles = {
  backgroundColor: 'transparent',
  fontSize: '14px',
  display: 'flex',
  py: 3,
  gap: 2,
  mt: { xs: -2, sm: -2 },
}

export const FooterSocials = ({ items }: FooterSocialsProps) => (
  <Box sx={footerSocialsStyles}>
    {items.map((item, index) => (
      <Link href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
        <IconButton
          aria-label={item.name}
          sx={{
            color: 'common.white',
            backgroundColor: 'common.black',
            '&:hover': { backgroundColor: 'common.black' },
          }}
        >
          <item.icon width={24} height={24} />
        </IconButton>
      </Link>
    ))}
  </Box>
)
