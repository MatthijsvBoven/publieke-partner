import type { MenuItemProps } from '@publiekepartner/components'

export const footerMenuItems: MenuItemProps[] = [
  {
    intlDescriptor: 'footer.legal.copyright',
  },
  {
    intlDescriptor: 'footer.legal.powered-by',
  },
  {
    href: '/algemene-voorwaarden',
    intlDescriptor: 'footer.legal.terms-and-conditions',
  },
  {
    href: '/privacy-policy',
    intlDescriptor: 'footer.legal.privacy-policy',
  },
]
