import type { MenuItemProps } from '@publiekepartner/components'

export const footerMenuItems: MenuItemProps[] = [
  {
    intlDescriptor: 'footer.legal.copyright',
    selected: false,
  },
  {
    intlDescriptor: 'footer.legal.powered-by',
    selected: false,
  },
  {
    href: '/algemene-voorwaarden',
    intlDescriptor: 'footer.legal.terms-and-conditions',
    selected: false,
  },
  {
    href: '/privacy-policy',
    intlDescriptor: 'footer.legal.privacy-policy',
    selected: false,
  },
]
