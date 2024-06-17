import { FooterSocialsProps } from '@publiekepartner/components'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

export const footerSocials: FooterSocialsProps = {
  items: [
    {
      name: 'twitter',
      url: 'https://twitter.com/PubliekePartner',
      icon: Twitter,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/101129585',
      icon: LinkedIn,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/de.publieke.partner',
      icon: Instagram,
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=61555646075718',
      icon: Facebook,
    },
  ],
}
