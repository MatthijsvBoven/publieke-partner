import { Container } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { PubliekePartnerHeader } from '../Header/PubliekePartnerHeader.tsx'

export const AppLayout = ({ children }: PropsWithChildren) => (
  <Container>
    <PubliekePartnerHeader />
    {children}
  </Container>
)
