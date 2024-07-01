import { Box, Container, Typography } from '@mui/material'
import type { PropsWithChildren } from 'react'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'

interface BoxPageProps extends PropsWithChildren {
  title: string
  seo?: NextSeoProps
}

const boxStyles = {
  mt: '8px',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}

export const BoxPage = ({ title, seo, children }: BoxPageProps) => (
  <Box sx={boxStyles}>
    <NextSeo {...seo} />
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
)
