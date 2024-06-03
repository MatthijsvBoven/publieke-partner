import { Container } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { PubliekePartnerHeader } from '../Header/PubliekePartnerHeader.tsx'

export const AppLayout = ({ children }: PropsWithChildren) => (
  <Container sx={{ backgroundColor: 'neutral.50', height: '100vh', width: 'auto' }}>
    <PubliekePartnerHeader />
    {children}
  </Container>
)
