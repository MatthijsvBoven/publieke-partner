import { Box, Typography } from '@mui/material'
import type { PropsWithChildren } from 'react'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'

interface BoxPageProps extends PropsWithChildren {
  title: string
  seo?: NextSeoProps
}

export const BoxPage = ({ title, seo, children }: BoxPageProps) => (
  <Box sx={{ p: { xs: '16px', sm: '32px 28px', md: '24px 28px', lg: '32px' } }}>
    <NextSeo {...seo} />
    <Typography
      component="h1"
      variant="h1"
      sx={{ fontsize: { xs: '18px', sm: '24px', lg: '28px', mb: '16px' }, fontWeight: 700, lineHeight: '38px' }}
      gutterBottom
    >
      {title}
    </Typography>
    {children}
  </Box>
)
